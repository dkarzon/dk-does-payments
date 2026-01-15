# Design Guidelines: DK Does Payments

## Design Approach
**System:** Linear/Stripe-inspired minimal professionalism
**Rationale:** Professional consultancy requires trust, clarity, and efficiency over visual flash. Clean typography and purposeful spacing convey expertise.

## Core Design Elements

### Typography
- **Headings:** Inter/Geist (600-700 weight)
  - H1: text-5xl md:text-6xl
  - H2: text-3xl md:text-4xl  
  - H3: text-xl md:text-2xl
- **Body:** Inter/Geist (400-500 weight)
  - Base: text-base md:text-lg
  - Small: text-sm

### Layout System
**Spacing primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20
- Component padding: p-4 to p-8
- Section spacing: py-12 md:py-20
- Container: max-w-6xl mx-auto px-4

### Component Library

**Navigation**
- Clean horizontal nav with logo left, links right
- Sticky header with subtle border-bottom
- Mobile: Hamburger menu

**Homepage**
- Hero: Clean typographic focus (no large image - consultant credibility first)
  - H1: "Expert Payments Technology Consulting"
  - Subheading with value prop
  - Primary CTA: "Book Consultation - $99/hr"
  - Trust indicator: Years of experience, key achievements
- Services grid: 2-column (md:grid-cols-2)
  - Payment strategy, Integration consulting, Technical advisory, Compliance guidance
  - Each card: icon, title, 2-3 line description
- Expertise section: Single column with badge/pill elements for technologies
- CTA section: Centered with booking prompt

**About Page (Damian Karzon)**
- Professional headshot: Top section, circular frame (200x200px)
- Bio content: max-w-3xl, readable prose
- Experience timeline: Vertical layout with company logos/names from resume
- Skills/Technologies: Grid of badges
- Contact info section

**Booking Page**
- Two-column layout (lg:grid-cols-2)
  - Left: Session details card
    - Title: "1-Hour Consultation"
    - Price: Large "$99" display
    - What's included list (4-5 bullet points)
    - Session format details
  - Right: Pinch Payment Link integration
    - Embedded payment form
    - Trust badges below form
- Confirmation messaging post-payment

**Footer**
- Three columns: About, Services, Contact
- Newsletter signup (optional contact method)
- Social links, copyright

### Images
**Professional headshot:** About page hero - circular crop, professional lighting
**No large hero images** - Typography-driven trust for consultant positioning

### Animations
Minimal: Subtle hover states on cards/buttons only (scale 1.02, shadow increase)

### Pinch Payments Integration
- Payment Links embedded in booking page iframe/component
- Clear $99 price display before payment
- Success/error states with clear messaging
- Secure badges/trust indicators near payment form