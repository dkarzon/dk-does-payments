import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Mic,
  Github,
  ExternalLink,
} from "lucide-react";

const experience = [
  {
    company: "Pinch Payments",
    role: "Principal Software Engineer",
    period: "March 2023 - Present",
    highlights: [
      "Spearheading development of a next-generation payments platform, delivering scalable solutions for high-volume transactions",
      "Acting as Developer Advocate, promoting the public payments API and enabling seamless integrations for external developers",
      "Designed and maintained mission-critical accounting system integrations (Xero, MYOB, QuickBooks)",
      "Built a Chrome extension (React, Tailwind CSS) to embed Pinch Payments data into partner platforms",
      "Championed engineering best practices, CI/CD automation, and cloud-native architecture",
    ],
  },
  {
    company: "Toddle / Care for Kids",
    role: "Technology Lead",
    period: "March 2021 - March 2023",
    highlights: [
      "Directed a cross-functional team to deliver platforms serving thousands of families and childcare providers",
      "Architected data consolidation strategy (PostgreSQL, Docker, Google Data Studio)",
      "Oversaw development using Python, React, Next.js, Docker, AWS, and ASP.NET Core",
    ],
  },
  {
    company: "WORK180",
    role: "Technology Lead",
    period: "February 2019 - March 2021",
    highlights: [
      "Led engineering teams to build and scale platforms empowering workplace diversity initiatives",
      "Implemented Business Intelligence strategy with Tableau Server",
      "Managed vendor relationships and technical budgeting",
    ],
  },
  {
    company: "Refereum",
    role: "Software Developer",
    period: "November 2018 - February 2019",
    highlights: [
      "Developed web services and applications using ASP.NET Core and Azure",
      "Integrated with third-party services including Twitch, Discord and Steam",
    ],
  },
  {
    company: "Skedulo",
    role: "Mobile Developer",
    period: "February 2017 - October 2018",
    highlights: [
      "Engineered and maintained mobile app using Xamarin.Forms for iOS/Android/UWP",
      "Established CI/CD pipelines with TeamCity and AppCenter",
      "Developed Slack bot automation for release management",
    ],
  },
  {
    company: "Marker Metro",
    role: "Development Lead",
    period: "July 2013 - December 2016",
    highlights: [
      "Led team of developers for mobile apps and games projects",
      "Developed across Web, Windows, Android, Unity3d and Xamarin platforms",
    ],
  },
  {
    company: "Ardent Leisure",
    role: "Lead Software Developer",
    period: "January 2009 - July 2013",
    highlights: [
      "Led software developers for projects across Dreamworld, WhiteWaterWorld, and Goodlife",
      "Built e-commerce systems integrated with Point of Sale using ASP.NET MVC",
    ],
  },
];

const skills = {
  professional: ["Communication", "Leadership", "Mentoring"],
  programming: ["C#", "JavaScript", "Node.js", "Java", "Xamarin", "Unity3d", "Python"],
  web: ["ASP.NET Core", "React", "Next.js", "HTML", "CSS", "Cordova"],
  platforms: ["Web", "Windows", "Mobile", "Xbox One"],
  data: ["PostgreSQL", "MS SQL Server", "Tableau", "OData", "GraphQL"],
  process: ["Git", "GitHub Actions", "Azure", "AWS", "Terraform", "Docker", "Cypress"],
};

const speaking = [
  { event: "DDD Melbourne 2025", topic: "The life hack of being a Developer" },
  { event: "DDD Brisbane 2019", topic: "Working remotely: Tips and Tricks to stay productive" },
  { event: "DDD Sydney 2018", topic: "Real world Xamarin.Forms" },
  { event: "Unite Melbourne 2016", topic: "Porting your game to Windows: Why and How" },
  { event: "Microsoft Ignite NZ 2016", topic: "UWP on Xbox One OMG!" },
  { event: "Microsoft Ignite NZ 2015", topic: "Cordova: Less of a (phone) gap than ever" },
  { event: "Microsoft TechEd NZ 2014", topic: "Why should I care about Cordova/PhoneGap?" },
];

const openSource = [
  { name: "singer-transform", desc: "Data transformation layer for Singer.io taps and targets" },
  { name: "DropNet", desc: ".NET client library for the Dropbox API" },
  { name: "mmbot", desc: "A C# port of Hubot" },
  { name: "Cordova Purchase Plugin", desc: "In-App Purchase plugin for Cordova" },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 shrink-0">
              <AvatarFallback className="text-4xl font-semibold bg-primary text-primary-foreground">
                DK
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-semibold mb-2" data-testid="text-about-name">
                Damian Karzon
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Principal Software Engineer at Pinch Payments
              </p>
              <p className="text-muted-foreground max-w-2xl mb-6">
                A passionate software engineer with over 15 years of experience building web applications, mobile apps, and payment systems. Currently leading payment platform development and developer advocacy at Pinch Payments, helping businesses streamline their payment integrations.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/dkarzon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" data-testid="button-github">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                <Link href="/book">
                  <Button data-testid="button-book-about">
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-experience-title">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} data-testid={`card-experience-${job.company.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{job.company}</CardTitle>
                      <p className="text-sm text-muted-foreground">{job.role}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="text-skills-title">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-education-title">
              Education
            </h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Queensland University of Technology</CardTitle>
              <p className="text-sm text-muted-foreground">
                Bachelor of Information Technology (2005 - 2010)
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">
                <span className="font-medium">Major:</span>{" "}
                <span className="text-muted-foreground">Web Services and Applications</span>
              </p>
              <div className="space-y-1">
                <p className="text-sm font-medium">Notable Results:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mobile Devices - High Distinction</li>
                  <li>• Core Systems Planning/Implementation - High Distinction</li>
                  <li>• Advanced Web Application Development - Distinction</li>
                  <li>• Enterprise Software Architecture - Distinction</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Mic className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-speaking-title">
              Conference Speaking
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {speaking.map((talk, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{talk.event}</p>
                  <p className="text-sm text-muted-foreground">{talk.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Github className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold" data-testid="text-opensource-title">
              Open Source
            </h2>
          </div>

          <p className="text-muted-foreground mb-6">
            I am very passionate about open source software. I have created and contributed to several open source libraries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openSource.map((project) => (
              <Card key={project.name} className="hover-elevate">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-sm">{project.name}</p>
                      <p className="text-sm text-muted-foreground">{project.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://github.com/dkarzon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" data-testid="button-view-github">
                View GitHub Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4" data-testid="text-about-cta">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how I can help with your payments technology challenges.
          </p>
          <Link href="/book">
            <Button size="lg" data-testid="button-book-about-cta">
              Book a Consultation - $99/hr
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
