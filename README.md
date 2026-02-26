# Skalvora Marketing Website

Production-ready marketing website for **Skalvora** built with **Next.js App Router + TypeScript + Tailwind CSS**.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Run local development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run Next.js ESLint checks

## How to edit content

Main editable content lives in structured modules and MDX files:

- `content/site.ts` - Brand messaging, navigation, testimonials, FAQ, metrics
- `content/services.ts` - Service details, process steps, pricing tiers, workshop formats/topics
- `content/caseStudies.ts` - Case study content used across list and detail pages
- `content/blog/en/*.mdx` - English blog post content and frontmatter
- `content/blog/hu/*.mdx` - Hungarian blog post content and frontmatter

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`
5. Output directory: `.next` (default)
6. Deploy.

## Architecture notes

- App Router pages live under `app/`
- Reusable components in `components/`
- API route for contact form: `app/api/contact/route.ts`
- SEO routes: `app/sitemap.ts` and `app/robots.ts`
- Global metadata + JSON-LD in `app/layout.tsx`
- Global EN/HU language switch stored in `skalvora_lang` cookie and rendered server-side
- Cookie notice is localStorage-based and implemented in `components/layout/cookie-notice.tsx`
- Analytics is a placeholder hook in `components/layout/analytics-placeholder.tsx`

## TODO before production

- Replace contact API logging with real email/CRM provider integration (Resend/SendGrid/HubSpot, etc.).
- Add real analytics provider keys and event wiring.
- Replace placeholder client logos, testimonials, and case studies with approved public references.
- Review Legal pages with counsel and update jurisdiction details.
- Configure canonical production URL in `content/site.ts` if domain differs.
