import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Code2,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Payment Strategy",
    description:
      "Strategic guidance on choosing the right payment processors and optimizing your payment flow for conversion and cost efficiency.",
  },
  {
    icon: Code2,
    title: "Integration Consulting",
    description:
      "Expert advice on integrating payment APIs including Stripe, Pinch, Xero, MYOB, and custom payment solutions.",
  },
  {
    icon: Shield,
    title: "Technical Advisory",
    description:
      "Architecture reviews, code audits, and best practices for building secure, scalable payment systems.",
  },
  {
    icon: Zap,
    title: "Compliance Guidance",
    description:
      "Navigate PCI-DSS requirements, Australian payment regulations, and ensure your systems meet industry standards.",
  },
];

const technologies = [
  "Pinch Payments",
  "Stripe",
  "Xero",
  "MYOB",
  "QuickBooks",
  "ASP.NET Core",
  "React",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Azure",
  "Docker",
];

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Building2, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Clients Helped" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4" data-testid="badge-hero">
              Payments Technology Consultant
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" data-testid="text-hero-title">
              Expert Payments Technology Consulting
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Get strategic guidance on payment integrations, API development, and fintech solutions from a seasoned principal software engineer with deep payments industry experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" data-testid="button-book-hero">
                  Book Consultation - $99/hr
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" data-testid="button-about-hero">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-services-title">
              How I Can Help
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage my experience building payment systems at scale to accelerate your project and avoid costly mistakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover-elevate" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 shrink-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-expertise-title">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep experience with the technologies that power modern payment systems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm py-1.5 px-3"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-why-title">
                Why Work With Me?
              </h2>
              <p className="text-muted-foreground mb-6">
                As a Principal Software Engineer at Pinch Payments, I bring hands-on experience building production payment systems that handle high-volume transactions.
              </p>
              <ul className="space-y-3">
                {[
                  "Currently building next-gen payments platform at Pinch",
                  "Developer Advocate promoting payments APIs",
                  "Built integrations with Xero, MYOB, QuickBooks",
                  "15+ years of software engineering experience",
                  "Conference speaker on payments and development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-semibold mb-2" data-testid="text-price-display">$99</div>
                  <div className="text-muted-foreground mb-6">per hour consultation</div>
                  <ul className="text-left space-y-2 mb-6">
                    {[
                      "1-on-1 video call",
                      "Technical deep-dive",
                      "Actionable recommendations",
                      "Follow-up summary email",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/book">
                    <Button className="w-full" data-testid="button-book-card">
                      Book Your Session
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-title">
            Ready to Solve Your Payments Challenges?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a consultation today and get expert guidance tailored to your specific needs.
          </p>
          <Link href="/book">
            <Button size="lg" data-testid="button-book-cta">
              Book Consultation - $99/hr
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
