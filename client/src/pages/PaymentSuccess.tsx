import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Mail, Calendar } from "lucide-react";

export default function PaymentSuccess() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const paymentId = params.get("paymentId");

  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4">
      <Card className="max-w-lg w-full" data-testid="card-success">
        <CardContent className="pt-8 pb-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-success-title">
            Payment Successful!
          </h1>
          <p className="text-muted-foreground mb-6">
            Thank you for booking a consultation with DK Does Payments.
          </p>

          {paymentId && (
            <p className="text-sm text-muted-foreground mb-6">
              Payment Reference: <span className="font-mono">{paymentId}</span>
            </p>
          )}

          <div className="space-y-4 text-left bg-card border rounded-lg p-4 mb-6">
            <h2 className="font-semibold">What happens next?</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  You'll receive a confirmation email with booking details
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Damian will reach out within 24 hours to schedule your consultation
                </span>
              </li>
            </ul>
          </div>

          <Link href="/">
            <Button className="w-full" data-testid="button-return-home">
              Return to Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
