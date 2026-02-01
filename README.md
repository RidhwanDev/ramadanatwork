# Ramadan at Work

A practical, web-based guide to support colleagues during Ramadan — designed for UK workplaces but globally usable.

## Features

- **Role-based guidance** for colleagues, managers, HR/DEI, friends/partners, and those not fasting
- **Copyable scripts** to reduce awkwardness in conversations
- **Prayer times widget** with approximate fasting windows
- **Print-friendly one-pager** for workplace distribution
- **Workplace Pack** (paid) with downloadable templates
- **Fully accessible** with WCAG 2.2 AA target
- **SEO optimized** for high-intent searches

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (tabs, accordions)
- **Hosting**: Vercel (recommended)
- **Payments**: Stripe
- **Email**: Resend

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in your environment variables:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

- `NEXT_PUBLIC_BASE_URL` - Your site's base URL
- `STRIPE_SECRET_KEY` - Stripe secret key for payments
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- `RESEND_API_KEY` - Resend API key for sending emails

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
├── content/          # JSON content files
├── lib/              # Utility functions
├── styles/           # Global CSS and print styles
└── public/           # Static assets
```

## Building for Production

```bash
npm run build
npm start
```

## License

The main guide content is free to use and share. The Workplace Pack templates are licensed per purchase.

## Support

For questions or feedback, email hello@ramadanatwork.com
