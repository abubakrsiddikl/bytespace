# ByteSpace

ByteSpace is a modern course-learning platform interface built with Next.js. It brings course discovery, learning paths, creator tools, growth metrics, testimonials, and newsletter signup into one responsive experience.

## Live Demo

[Open ByteSpace](https://bytespace-chi.vercel.app)

## Features

- Responsive landing page with hero section and course search UI
- Featured course grid with category filtering
- Dedicated courses page at `/courses`
- Curated learning paths for guided progression
- Animated growth statistics and count-up effects
- Creator-focused feature and revenue sections
- Partner and brand logo displays
- Testimonials section with student stories
- Responsive navigation with mobile menu support
- Newsletter signup form in the footer
- Reusable UI primitives based on Tailwind CSS and Radix/shadcn patterns
- Local image assets for courses, students, partners, and testimonials

## Tech Stack

- Next.js `16.3.6` with the App Router
- React `19`
- TypeScript
- Tailwind CSS `4`
- Radix UI and shadcn-style components
- Lucide React icons
- Next Font with Geist and Geist Mono
- Vercel deployment

## Pages and Routes

| Route | Description |
| --- | --- |
| `/` | Full ByteSpace landing page |
| `/courses` | Course catalog page with the reusable course section |

The footer also contains links reserved for future pages such as creator registration, affiliate information, contact, help, and legal documents.

## Project Structure

```text
bytespace/
├── public/
│   └── asset/                 # Course, student, partner, and testimonial images
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page composition
│   │   ├── courses/page.tsx   # Course catalog route
│   │   ├── layout.tsx         # Global metadata, fonts, and navbar
│   │   └── globals.css        # Global Tailwind styles
│   ├── components/
│   │   ├── courses/           # Course cards, filters, grids, and learning paths
│   │   ├── creator/           # Creator feature and revenue sections
│   │   ├── cta/               # Creator call-to-action section
│   │   ├── footer/             # Footer and footer types
│   │   ├── growth/            # Growth metrics and statistics
│   │   ├── shared/            # Reusable animated shapes and section helpers
│   │   ├── testimonials/      # Testimonial cards and sections
│   │   └── ui/                # Shared UI primitives
│   ├── lib/
│   │   └── utils.ts           # Shared utility helpers
│   ├── style/
│   │   └── animations.css     # Float, wiggle, blob, and motion utilities
│   └── types/                 # Shared TypeScript models
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the project |

## Content and Data

Course, category, learning path, partner, statistic, and testimonial content currently lives in TypeScript data modules under `src/components`. This keeps the interface easy to update while the project is not connected to a backend or CMS.

Images are served from `public/asset` and referenced with paths such as `/asset/courses/c1.jpg`.

## Deployment

The project is deployed on Vercel and is available at [bytespace-chi.vercel.app](https://bytespace-chi.vercel.app).

For a new deployment, connect the repository to Vercel or run the Vercel CLI after authenticating:

```bash
npx vercel
```

## Notes

- The current course and interaction data is local demo content.
- Search and newsletter forms expose callback hooks but do not yet connect to an external service.
- Several footer destinations are placeholders for future product pages.
