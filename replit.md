# DK Does Payments

## Overview
A professional website for "DK Does Payments" - a payments technology consulting service run by Damian Karzon. The site allows visitors to learn about Damian's expertise and book 1-hour consultation sessions for $99.

## Project Architecture

### Frontend (React + Vite)
- **Framework**: React with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state

### Pages
- `/` - Home page with hero, services, and CTAs
- `/about` - About Damian Karzon with full resume, experience, skills, speaking engagements
- `/book` - Booking page with form and payment integration
- `/payment-success` - Success page after payment completion

### Backend (Express)
- **Framework**: Express.js with TypeScript
- **API Endpoints**:
  - `POST /api/bookings` - Creates a payer and payment link via Pinch Payments

### Pinch Payments Integration
The site integrates with Pinch Payments for secure payment processing:
1. User fills in booking form with name, email, company, message
2. Backend creates a Payer in Pinch Payments
3. Backend creates a Payment Link for $99 AUD
4. User is redirected to Pinch-hosted checkout page
5. After payment, user is redirected back to `/payment-success`

## Environment Variables
- `PINCH_APP_ID` - Pinch Payments Merchant ID
- `PINCH_SECRET_KEY` - Pinch Payments Secret Key
- `SESSION_SECRET` - Session secret for Express

## Running the Project
```bash
npm run dev
```
This starts the Express server on port 5000 which also serves the Vite frontend.

## Recent Changes
- January 2026: Initial build with Home, About, Book pages and Pinch Payments integration
