import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  Clock,
  Video,
  FileText,
  Mail,
  Shield,
  CreditCard,
  Loader2,
} from "lucide-react";

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const included = [
  { icon: Clock, text: "1 hour video consultation" },
  { icon: Video, text: "Flexible scheduling (your timezone)" },
  { icon: FileText, text: "Technical deep-dive on your challenges" },
  { icon: Mail, text: "Follow-up summary with recommendations" },
];

export default function Book() {
  const { toast } = useToast();
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const createPaymentMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return await response.json() as { paymentUrl: string; paymentLinkId: string };
    },
    onSuccess: (data) => {
      setPaymentUrl(data.paymentUrl);
      window.location.href = data.paymentUrl;
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Error",
        description: error.message || "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    createPaymentMutation.mutate(data);
  };

  return (
    <div className="flex flex-col py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-book-title">
            Book Your Consultation
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get expert guidance on your payments technology challenges. Fill in your details below to proceed to secure payment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card data-testid="card-session-details">
            <CardHeader>
              <CardTitle className="text-xl">1-Hour Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold" data-testid="text-price">$99</span>
                <span className="text-muted-foreground">AUD</span>
              </div>

              <div className="space-y-4">
                <p className="font-medium">What's included:</p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="font-medium mb-3">Session topics can include:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    Payment gateway selection and integration strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    API architecture and best practices review
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    Accounting system integrations (Xero, MYOB, QuickBooks)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    PCI compliance and security considerations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    Performance optimization and scaling strategies
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-booking-form">
            <CardHeader>
              <CardTitle className="text-xl">Your Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              {...field}
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Smith"
                              {...field}
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            {...field}
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What would you like to discuss? (optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe your payments challenge or question..."
                            className="resize-none"
                            rows={4}
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={createPaymentMutation.isPending}
                    data-testid="button-proceed-payment"
                  >
                    {createPaymentMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 mr-2" />
                        Proceed to Payment - $99
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 pt-4 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Secure payment powered by Pinch Payments</span>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
