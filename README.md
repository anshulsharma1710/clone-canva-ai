# Image AI

**A Canva-inspired design editor with AI image tools. Build graphics on a drag-and-drop canvas, pull in stock photos, and export your work.**

> An independent learning project inspired by online design tools. It is not affiliated with or endorsed by Canva.

## Overview

Image AI is a full-stack design editor that runs in the browser. Users sign in, create projects, and compose designs on a canvas with text, shapes, images and colors. Stock photos come from Unsplash, uploads go through UploadThing, AI image tools run on Replicate, and paid features are handled with Stripe subscriptions.

## Features

- **Canvas editor:** drag, resize and layer objects on a Fabric.js canvas.
- **Text, shapes and colors:** edit properties with a color picker, sliders and a toolbar.
- **Image uploads:** upload your own images with UploadThing.
- **Stock photos:** search and add Unsplash images directly in the editor.
- **AI image tools:** generate and edit images using models on Replicate.
- **Saved projects:** designs are stored in Postgres and can be reopened and edited.
- **Authentication:** sign up and sign in with Auth.js.
- **Subscriptions:** upgrade to a paid plan through Stripe.
- **Light and dark themes** and a responsive layout.

## Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Canvas | Fabric.js |
| UI | Tailwind CSS, shadcn/ui, Radix UI, Lucide icons |
| State and data fetching | Zustand, TanStack Query |
| API | Hono, Zod validation |
| Database | PostgreSQL on Neon, Drizzle ORM |
| Auth | Auth.js (NextAuth v5), Drizzle adapter |
| Integrations | Replicate, Unsplash, UploadThing, Stripe |
| Deployment | Vercel |

## Getting started

### Prerequisites

- Node.js 18.17 or later (and [Bun](https://bun.sh) if you want to use the `bunx` database scripts as written)
- A PostgreSQL database (a free [Neon](https://neon.tech) project works)
- API keys for Replicate, Unsplash, UploadThing and Stripe

### Installation

```bash
git clone https://github.com/anshulsharma1710/clone-canva-ai.git
cd clone-canva-ai
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL=
AUTH_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000

REPLICATE_API_TOKEN=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
UNSPLASH_ACCESS_KEY=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=
```

### Set up the database

```bash
npm run db:generate   # generate migrations from the schema
npm run db:migrate    # apply them to your database
npm run db:studio     # optional: browse your data
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Apply migrations |
| `npm run db:studio` | Open Drizzle Studio |

<!-- If you built this by following a tutorial or course, credit it here, for example:
## Credits
Built while following [Course Name] by [Author]. -->

## Author

**Anshul Sharma**: Data Engineer and full-stack developer
[LinkedIn](https://www.linkedin.com/in/anshulsharma02) · [GitHub](https://github.com/anshulsharma1710) · sanshul5555@gmail.com
