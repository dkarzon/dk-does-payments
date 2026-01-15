# DK Does Payments

A professional payment technology consulting website built as a demo for the Build Club meetup. This project showcases a full-stack application integrating payment processing, modern React UI, and a clean Express.js backend.
Built with Replit using the following prompt:
```
Create a web app for a Payments Technology Consultant named "DK does payments".
Add a page about the founder Damian Karzon using information from here: https://dkdevelopment.net/resume/ 
Add a page where users can book a 1 hour session for a fee of $99
Integrate online payments using Pinch Payments (See https://docs.getpinch.com.au/llms.txt ) to pay for services, make use of the new Payment Links feature (https://docs.getpinch.com.au/docs/payment-links)
```

## 🎯 Project Overview

DK Does Payments is a consultancy website that allows clients to book and pay for 1-hour payment technology consultations. The site demonstrates:

- **Payment Integration**: Real-time payment processing using Pinch Payments API
- **Modern Full-Stack Architecture**: React frontend with Express.js backend
- **Professional UI**: Clean, minimal design inspired by Linear/Stripe aesthetics
- **Type-Safe Development**: Full TypeScript implementation with Zod validation

This project was created as a live coding demonstration for the Build Club meetup, showcasing how to build a production-ready payment-enabled web application from scratch.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Wouter** - Lightweight routing
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Express.js** - Web server framework
- **TypeScript** - Type-safe server code
- **Pinch Payments API** - Payment processing
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Database (via Drizzle)
- **Zod** - Request validation

### Development Tools
- **tsx** - TypeScript execution
- **Drizzle Kit** - Database migrations
- **ESBuild** - Fast bundling

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Pinch Payments API credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dk-does-payments
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   NODE_ENV=development
   DATABASE_URL=postgresql://user:password@localhost:5432/dk_does_payments
   PINCH_API_KEY=your_pinch_api_key
   PINCH_API_URL=https://api.getpinch.com.au
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🎨 Features

### Pages
- **Home** - Landing page with services overview and consultation booking CTA
- **About** - Professional bio and experience showcase
- **Book** - Consultation booking form with integrated payment processing
- **Payment Success** - Confirmation page after successful payment

### Payment Flow
1. User fills out booking form (name, email, company, message)
2. Backend creates a payer in Pinch Payments
3. Payment link is generated for $99 consultation fee
4. User is redirected to Pinch payment page
5. After payment, user is redirected to success page

### API Endpoints
- `POST /api/bookings` - Create a booking and generate payment link
  - Validates booking data with Zod
  - Creates payer in Pinch
  - Generates payment link
  - Returns payment URL and link ID

## 🎨 Design Philosophy

The design follows a **Linear/Stripe-inspired minimal professionalism** approach:

- **Typography-driven**: Clean, readable fonts (Inter/Geist) with clear hierarchy
- **Purposeful spacing**: Consistent spacing system using Tailwind's 4px grid
- **Trust-focused**: Professional appearance that builds credibility
- **Component-based**: Reusable UI components from shadcn/ui
- **Responsive**: Mobile-first design that works on all devices

See `design_guidelines.md` for detailed design specifications.

## 🏗️ Build Club Meetup Demo

This project was created as a live demonstration for the Build Club meetup. The demo covered:

1. **Project Setup**: Initializing a full-stack TypeScript project
2. **Frontend Development**: Building React components with Tailwind CSS
3. **Backend API**: Creating Express routes with type-safe validation
4. **Payment Integration**: Integrating Pinch Payments API for real payments
5. **Database Setup**: Using Drizzle ORM for type-safe database operations
6. **Deployment Considerations**: Production build and deployment strategies

The goal was to show how modern tools and best practices can accelerate development while maintaining code quality and type safety.

## 🔒 Security Considerations

- Input validation using Zod schemas
- Secure payment processing via Pinch Payments (PCI-compliant)
- Environment variables for sensitive credentials
- Type-safe database queries with Drizzle ORM
- Express middleware for request validation

## 📚 Key Learnings

This project demonstrates:

- **Full-stack TypeScript**: Shared types between frontend and backend
- **Modern React Patterns**: Hooks, context, and component composition
- **API Integration**: Real-world payment API integration
- **Type Safety**: End-to-end type safety from database to UI
- **Developer Experience**: Fast feedback loops with Vite and TypeScript

## 🤝 Contributing

This project was created as a demo, but contributions and improvements are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests
- Share feedback

## 📄 License

MIT

## 👤 Author

Created by Damian Karzon for the Build Club meetup demonstration.

---

**Note**: This is a demonstration project. For production use, ensure proper security measures, error handling, and compliance with payment processing regulations.
