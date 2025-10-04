# MarketHub - Multiple Vendors E-commerce Platform

## Project Overview

**MarketHub** is a modern, scalable, and accessible e-commerce platform designed to empower local vendors and delight customers. Built with React 19, Vite, and a cutting-edge UI stack, MarketHub delivers a bilingual shopping experience with seamless vendor onboarding and robust marketplace features.

---

## Table of Contents

- [Technology Stack](#technology-stack)
- [Design Principles](#design-principles)
- [Component Structure](#component-structure)
- [Internationalization Strategy](#internationalization-strategy)
- [Responsive Design Specifications](#responsive-design-specifications)
- [Accessibility Requirements](#accessibility-requirements)
- [Component Reusability Strategy](#component-reusability-strategy)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [License](#license)

---

## Technology Stack

- **Framework**: React 19 + Vite
- **UI Library**: ShadCN UI
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, Emojis
- **Languages**: English (Primary) / Khmer (Secondary)
- **Other**: TypeScript, CSS

---

## Design Principles

- **Mobile-first responsive design**
- **Vendor-centric onboarding experience**
- **Bilingual support (English/Khmer)**
- **Semantic, accessible HTML structure**
- **Performance optimized (lazy loading, code splitting)**

---

## Component Structure

### 1. 🏠 Hero Section

- **Brand Impact**: Full-screen gradient with product collage
- **Headline**: "Shop Local. Sell Global."
- **Subheadline**: "Empowering vendors, delighting customers."
- **CTAs**: "Start Selling" (for vendors), "Browse Marketplace" (for customers)
- **Language Toggle**: Easy access in header

_Design specs:_
- Typography: `text-4xl md:text-6xl font-bold`
- Buttons: Primary (`bg-primary`), Secondary (`border border-gray-300`)
- Responsive padding: `py-20 md:py-32`
- Background: `bg-gradient-to-br from-primary/10 to-secondary/10`

### 2. 🛍️ Featured Categories

- **Grid Layout**: 2 columns (mobile), 3 (tablet), 5 (desktop)
- **Category Card**: Emoji icon, bilingual labels, hover scale
- **Category Data Structure**:
  ```typescript
  interface Category {
    name: string;      // English
    khmer: string;     // Khmer
    icon: string;      // Emoji
  }
  ```

### 3. 🧑‍💼 Vendor Spotlight

- **Carousel**: Horizontal scrolling with snap points
- **Vendor Card**: Avatar, store name/location, star rating, product count, "Visit Store" button
- **Vendor Data Structure**:
  ```typescript
  interface Vendor {
    name: string;
    products: number;
    rating: number;    // 0-5
    location: string;
  }
  ```

### 4. 🔍 Search & Discovery

- **Search Bar**: Prominent, with icon and bilingual placeholder
- **Filters**:
  1. Category dropdown (emoji + location icon)
  2. Price range slider
  3. Location select
- _Input styling_: `text-lg py-6 pl-10 pr-4 rounded-full`

### 5. 📦 How It Works (Dual Journey)

- **Tabbed Interface**: "For Vendors" vs "For Customers"
- **Four Steps**:
  - Vendors: Register → List Products → Sell & Grow → Get Paid
  - Customers: Browse → Search → Purchase → Review
- **Icons**: Lucide React
- _Grid_: `grid md:grid-cols-4 gap-6`

### 6. 📈 Platform Benefits

- **Benefits Grid**: 4 cards, Lucide icon, title, description
- **Benefit Data Structure**:
  ```typescript
  interface Benefit {
    title: string;
    description: string;
    icon: LucideIcon;
  }
  ```
- _Hover effect_: `hover:shadow-lg transition-shadow`

### 7. 🧾 Testimonials & Trust Signals

- **Testimonials Grid**: 3 cards, 5-star rating, quote, avatar, name/role
- _Grid_: `grid md:grid-cols-3 gap-6`

### 8. 📱 Mobile App Promotion

- **App Store Buttons**: iOS & Android
- **QR Code**: Quick install option
- **Container**: `bg-primary/10`
- **Downloads**: Platform-colored, white background

### 9. 📬 Newsletter & Engagement

- **Email Input**: Bilingual placeholder, ShadCN Input component
- **Subscribe Button**: Primary style
- **Privacy Disclaimer**: Text below input
- **Layout**: Centered card, `max-w-2xl`

### 10. 🧭 Footer

- **Five-column Layout**:
  1. Brand info, social icons (Facebook, Twitter, Instagram, YouTube)
  2. About (Us, Careers, Press, Blog)
  3. Help Center (FAQ, Shipping, Returns, Contact)
  4. Vendor Resources (Become Vendor, Dashboard, Support, Success Stories)
  5. Legal & language toggle
- _Responsive_: `grid-cols-5` desktop, `grid-cols-1` mobile
- _Bottom bar_: `flex flex-col md:flex-row`

---

## Internationalization Strategy

### Language Toggle

- **State**: `useState<'en' | 'km'>`
- **Header/ Footer**: Toggle present for accessibility
- **Content Switching**: Ternary operator for bilingual display
  ```jsx
  {language === 'km' ? category.khmer : category.name}
  ```

### Bilingual Content Areas

- **Categories**: English/Khmer
- **Search Placeholder**: "Search products..." / "ស្វែងរកផលិតផល..."
- **Newsletter Placeholder**: "Your email..." / "អ៊ីមែលរបស់អ្នក..."
- **Language Labels**: "English" / "ភាសាខ្មែរ"

---

## Responsive Design Specifications

### Breakpoints

- **Mobile**: `<768px` (single column, hamburger menu)
- **Tablet**: `768px-1024px` (2-3 columns)
- **Desktop**: `>1024px` (4-5 columns)

### Mobile Features

- Hamburger menu for navigation
- 44px minimum tap targets
- Vendor carousel uses snap scrolling
- Multi-column stacks to single

### Performance

- **Lazy Loading**: Images/components
- **Code Splitting**: Route-based
- **Optimized Assets**: SVG preferred
- **Font Loading**: System fonts, Inter fallback

---

## Accessibility Requirements

- **Semantic HTML**: Proper heading hierarchy, landmark roles, ARIA labels
- **Keyboard Navigation**: Visible focus, logical tab order, skip links, accessible dialogs
- **Color/Contrast**: 4.5:1 minimum, color-independent info, large touch targets, reduced motion support
- **Screen Reader Support**: Alt text, live regions, semantic tables, ARIA error messaging

---

## Component Reusability Strategy

### Atomic Design

- **Atoms**: Buttons, Inputs, Icons, Avatars
- **Molecules**: Category/Vendor/Testimonial Cards
- **Organisms**: Hero, Categories, Vendor Spotlight
- **Templates**: Page layouts

### Props Interface

- TypeScript interfaces for all props
- Consistent naming, default values
- Children prop support for composition

### Theme

- Colors from Tailwind theme
- Spacing scale consistency
- Typography hierarchy
- Borders, shadows from theme

---

## Getting Started

### Prerequisites

- [Node.js & npm (use nvm)](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Enter project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm i

# 4. Start development server
npm run dev
```

### Edit Online

- Use [Lovable Project](https://lovable.dev/projects/1e0a4a1e-4ae4-4fe7-8de7-9dab560b1afe) for instant AI-powered editing.

### GitHub Codespaces

- Launch a new Codespace via the repository's "Code" button and edit online.

---

## Deployment

- Deploy via [Lovable](https://lovable.dev/projects/1e0a4a1e-4ae4-4fe7-8de7-9dab560b1afe): **Share → Publish**

---

## Custom Domain Setup

- Go to Project > Settings > Domains in Lovable and click Connect Domain.
- [Read full guide](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact & Support

- For support, vendor onboarding, or feature requests, open an issue or contact via [Lovable](https://lovable.dev/projects/1e0a4a1e-4ae4-4fe7-8de7-9dab560b1afe).
