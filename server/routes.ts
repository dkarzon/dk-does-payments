import type { Express } from "express";
import { createServer, type Server } from "http";
import { pinchClient } from "./pinch";
import { z } from "zod";

const bookingSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Create booking and payment link
  app.post("/api/bookings", async (req, res) => {
    try {
      const data = bookingSchema.parse(req.body);
      
      // Create payer in Pinch
      const payer = await pinchClient.createPayer({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        companyName: data.company,
      });

      // Build return URL based on request origin
      const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'https';
      const host = req.headers['x-forwarded-host'] || req.headers.host;
      const baseUrl = `${protocol}://${host}`;
      const returnUrl = `${baseUrl}/payment-success`;

      // Create payment link for $99 consultation (9900 cents)
      const paymentLink = await pinchClient.createPaymentLink({
        amount: 9900,
        payerId: payer.id,
        description: "DK Does Payments - 1 Hour Consultation",
        returnUrl: returnUrl,
        allowedPaymentMethods: ["credit-card", "bank-account"],
        metadata: JSON.stringify({
          service: "consultation",
          message: data.message || "",
        }),
      });

      res.json({
        paymentUrl: paymentLink.url,
        paymentLinkId: paymentLink.id,
      });
    } catch (error) {
      console.error("Booking error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid booking data", details: error.errors });
        return;
      }
      
      res.status(500).json({ 
        error: "Failed to create booking. Please try again." 
      });
    }
  });

  return httpServer;
}
