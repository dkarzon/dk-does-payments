import { Link } from "wouter";
import { CreditCard, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
                <CreditCard className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">DK Does Payments</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Expert payments technology consulting helping businesses navigate the complex world of payment integrations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-home">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-about">
                About Damian
              </Link>
              <Link href="/book" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-book">
                Book Consultation
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/dkarzon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary text-secondary-foreground hover-elevate transition-colors"
                data-testid="link-github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/damiankarzon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary text-secondary-foreground hover-elevate transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:damian@dkdevelopment.net"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary text-secondary-foreground hover-elevate transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Brisbane, Australia
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} DK Does Payments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
