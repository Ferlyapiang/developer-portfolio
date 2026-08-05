# Ferly Apiang Portfolio

Premium personal portfolio website for **Ferly Jeremi Purnawan Apiang**, positioned as a Senior Full Stack Software Engineer focused on enterprise software, ERP, CRM, logistics systems, and operational platforms.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Static content-driven architecture for fast deployment

## Pages

- `/` landing page with hero, positioning, services, featured projects, process, FAQ, and contact CTA
- `/projects` project overview page
- `/projects/[slug]` individual case study page
- `/services` detailed service page
- `/blog` future-ready blog placeholder
- `/contact` contact links and inquiry form shell

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Important customization

Update these values before publishing:

- Contact links in `src/data/site.ts`
- Public domain in `src/data/site.ts`
- Email address, WhatsApp number, LinkedIn, GitHub, and Telegram links
- Project narratives if you want stricter alignment to confidential real-world details

## Deployment

This project can be deployed easily to:

- Vercel
- a VPS with Node.js
- Docker-based hosting

### Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set the production domain.
4. Redeploy after updating contact information.

### Optional next steps

- Connect the contact form to Resend, Formspree, or a custom backend
- Add real screenshots for each project case study
- Replace placeholder testimonials with real client quotes
- Add MDX blog posts if you want content marketing support
