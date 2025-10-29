# Construction Website - Next.js Application

A modern, professional construction and architecture website built with Next.js 16, Tailwind CSS v4, and React.

## 🚀 Features

### **Multi-Page Application**
- ✅ **Home Page** (`/`) - Complete landing page with all sections
- ✅ **Services Page** (`/services`) - Detailed services showcase
- ✅ **Projects Page** (`/projects`) - Portfolio with project statistics
- ✅ **About Page** (`/about`) - Company information, mission, vision & values
- ✅ **Contact Page** (`/contact`) - Contact form and office information

### **Design Features**
- 🎨 **Modern Gradient Designs** - Eye-catching color schemes
- ✨ **Smooth Animations** - Blob animations, text shimmer, scroll effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Interactive Elements** - Hover effects, transitions, and micro-interactions
- 💫 **Glass-morphism Effects** - Modern frosted glass UI elements
- 🌈 **Custom Animations** - Gradient shifts, blob movements, scroll indicators

### **Technical Stack**
- **Framework:** Next.js 16.0.0 (App Router)
- **Styling:** Tailwind CSS v4
- **React:** 19.2.0
- **Build Tool:** Turbopack (Fast Refresh)
- **Font:** Geist Sans & Geist Mono

## 📂 Project Structure

```
construction-nextjs/
├── app/
│   ├── page.js              # Home page (all sections)
│   ├── services/
│   │   └── page.js          # Services page
│   ├── projects/
│   │   └── page.js          # Projects page
│   ├── about/
│   │   └── page.js          # About page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── layout.js            # Root layout
│   └── globals.css          # Global styles & animations
├── components/
│   ├── Navbar.js            # Navigation with routing
│   ├── Hero.js              # Hero section
│   ├── Services.js          # Services grid
│   ├── Projects.js          # Projects portfolio
│   ├── About.js             # About section
│   ├── Contact.js           # Contact form
│   └── Footer.js            # Footer with links
└── public/                  # Static assets
```

## 🎯 Pages Overview

### 1. **Home Page** (`/`)
- Hero section with animated gradients
- Complete services showcase
- Featured projects
- About company
- Contact form
- Full landing page experience

### 2. **Services Page** (`/services`)
- Detailed service cards with gradients
- "Why Choose Us" section
- Award-winning, fast delivery, premium quality highlights

### 3. **Projects Page** (`/projects`)
- Project portfolio with hover effects
- Project statistics (500+ projects, 98% satisfaction, 15+ years, 25+ awards)
- Interactive project cards

### 4. **About Page** (`/about`)
- Company background
- Mission & Vision statements
- Core values (Integrity, Excellence, Collaboration, Sustainability)
- Team statistics

### 5. **Contact Page** (`/contact`)
- Contact form
- Office location map placeholder
- Quick contact cards (Call, Email, Live Chat)
- Contact information

## 🎨 Custom Animations

- **animate-blob** - Floating bubble animations
- **animate-gradient-shift** - Background gradient movement
- **animate-text-shimmer** - Shimmering text effect
- **animate-pulse-slow** - Gentle pulsing animation
- **animate-scroll** - Scroll indicator animation
- **animate-fadeInUp** - Fade in with upward motion

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🎯 Navigation

The website uses Next.js App Router with client-side navigation:
- Click navigation links for instant page transitions
- No page reloads between routes
- Smooth user experience

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Perfect layout for tablets
- **Desktop** - Full-featured desktop experience
- **Mobile Menu** - Hamburger menu with smooth transitions

## 🎨 Color Palette

- **Primary:** Orange (#FF6B35)
- **Secondary:** Red (#E55A2B)
- **Accent:** Blue, Purple, Green, Cyan gradients
- **Text:** Gray-900 (Dark), Gray-600 (Medium)
- **Background:** White, Gray-50

## ✨ Key Components

### Navbar
- Fixed position with backdrop blur
- Gradient logo with hover glow
- Link-based navigation (Next.js routing)
- Mobile responsive hamburger menu

### Footer
- Gradient background
- Company info, quick links, services, contact
- Social media icons
- Animated heart in copyright

### Hero Section
- Full-screen with animated gradient background
- 3 floating blob animations
- Text shimmer effect
- Scroll indicator with animation
- Call-to-action buttons

### Service Cards
- Unique gradient per service
- Icon animations on hover
- "Learn More" indicator
- Glass-morphism effects

### Project Cards
- Grid pattern overlay
- Hover zoom effect
- Glass-morphism info cards
- Project statistics badges

## 🔧 Customization

### Update Colors
Edit `app/globals.css` for custom animations and base styles.

### Add New Pages
1. Create folder in `app/` directory
2. Add `page.js` file
3. Use existing page structure as template
4. Update Navbar links

### Modify Content
- Services: Edit `components/Services.js`
- Projects: Edit `components/Projects.js`
- Contact Info: Edit `components/Contact.js`

## 📄 License

All rights reserved © 2024 Engineer Architect Consultancy

---

**Built with ❤️ for Excellence**
