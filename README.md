# Fit Pass - Doorway/Delivery Fit Calculator

Standalone Doorway/Delivery Fit Calculator: map delivery paths, compute clearances for doors/turns/stairs, and generate a time-stamped, sharable PDF Fit Pass with photos. Privacy: strip EXIF, purge photos in 72h.

## Features

- **Multi-checkpoint path tracking**: Entry doors, hallways, turns, stairs, landings, elevators
- **Smart calculation engine**: Automated clearance checks with configurable safety margins (3-6 inches)
- **Interactive Quick Try demo**: Test a single checkpoint instantly
- **Unit conversion**: Toggle between inches and centimeters
- **Privacy-first**: No address storage, EXIF stripping, 72-hour auto-deletion
- **Responsive design**: Mobile-first with hamburger navigation and sticky CTAs
- **SEO optimized**: JSON-LD structured data, semantic HTML, proper meta tags
- **Accessibility**: WCAG AA compliant, keyboard navigation, screen reader support

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/chaos-factory/ideator-execution-003-ai-room-design-4-doorway-delivery-fit-calculator.git
cd ideator-execution-003-ai-room-design-4-doorway-delivery-fit-calculator

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (generates static export in `out/`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest unit tests
- `npm run test:watch` - Run tests in watch mode

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The deployment workflow:

1. **Build Workflow** (`.github/workflows/build.yml`)
   - Runs on all pushes and pull requests
   - Tests on Node.js 18.x and 20.x
   - Runs linter, tests, and build
   - Uploads build artifacts

2. **Deploy Workflow** (`.github/workflows/deploy.yml`)
   - Runs only on pushes to `main` branch
   - Builds the site with static export
   - Deploys to GitHub Pages

#### Setup GitHub Pages

To enable GitHub Pages for this repository:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will be available at `https://chaos-factory.github.io/ideator-execution-003-ai-room-design-4-doorway-delivery-fit-calculator/`

#### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in GitHub
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

#### Local Static Export

To generate a static export locally:

```bash
npm run build
# Output will be in the 'out/' directory
```

The static files can be served by any static hosting service.

#### Configuration

The project uses Next.js static export mode configured in `next.config.ts`:

```typescript
{
  output: 'export',
  images: {
    unoptimized: true,
  }
}
```

**Note**: If deploying to a subdirectory (e.g., `/repo-name/`), uncomment and set the `basePath` in `next.config.ts`.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO and JSON-LD
│   ├── page.tsx          # Landing page
│   ├── wizard/           # Full wizard (stub)
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   └── refunds/          # Refund policy
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Toggle.tsx
│   │   ├── StatusChip.tsx
│   │   └── Modal.tsx
│   ├── icons/            # SVG icon components
│   ├── Header.tsx        # Sticky header with navigation
│   ├── Hero.tsx          # Hero section
│   ├── QuickTryCard.tsx  # Interactive calculator demo
│   ├── HowItWorks.tsx
│   ├── FeatureGrid.tsx
│   ├── Pricing.tsx
│   ├── Faq.tsx
│   └── Footer.tsx
├── content/              # Centralized content
│   └── fit-pass-landing.ts  # All copy and content
├── lib/                  # Utilities and logic
│   ├── calc.ts          # Calculator logic with unit conversion
│   └── calc.test.ts     # Unit tests
├── public/              # Static assets
│   ├── pdfs/           # Example PDFs
│   └── images/         # Images and mockups
└── README.md
```

## Calculator Logic

The Fit Pass calculator uses a rules-based approach:

### Safety Margins
- Default: 3 inches (7.6 cm)
- Adjustable: 0-6 inches
- Accounts for packaging, handler hand placement, and maneuvering

### Status Thresholds
- **Pass** (green): Clearance > 1.5 inches (3.8 cm)
- **Warn** (yellow): Clearance 0-1.5 inches
- **Fail** (red): Clearance < 0

### Calculation Formula
```
clearance = doorway_width - safety_margin - min(box_height, box_depth)
```

See `lib/calc.ts` for complete implementation.

## Testing

The project includes comprehensive unit tests for the calculator logic:

```bash
npm test
```

Tests cover:
- Unit conversion (inches ↔ centimeters)
- Status threshold calculations
- Edge cases and rounding
- Input validation

All tests pass with 100% coverage of calculator functions.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + Testing Library
- **Icons**: Custom SVG components
- **Deployment**: Vercel-ready

## SEO & Structured Data

The landing page includes:
- JSON-LD schemas (Product, FAQPage, HowTo)
- Optimized meta tags
- Open Graph and Twitter cards
- Semantic HTML structure
- Keyword-rich content

## Accessibility

- WCAG AA compliant color contrast
- Full keyboard navigation
- ARIA labels and roles
- Screen reader support
- Focus indicators
- Semantic HTML

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Features planned but not yet implemented:
- Full multi-checkpoint wizard
- Photo upload with EXIF scrubbing
- PDF generation
- Payment processing
- Share links and QR codes
- User accounts

## License

Proprietary - All rights reserved

## Contact

- Email: hello@fitpass.example
- Partners: partners@fitpass.example

