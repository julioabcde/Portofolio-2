# Portfolio

Personal portfolio site for Julio. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, custom design tokens (see `tailwind.config.js`)
- **Animation:** Framer Motion, AOS, custom WebGL light rays
- **Mailer:** Nodemailer over Gmail SMTP

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Required environment variables

Create `.env.local` with:

```
EMAIL_USER=<gmail address used to send>
EMAIL_PASS=<gmail app password>
EMAIL_TO=<inbox that receives contact form submissions>
```

`EMAIL_PASS` must be a Google [App Password](https://support.google.com/accounts/answer/185833) — regular account passwords do not work with SMTP.

## Design system

See [DESIGN (2).md](./DESIGN%20%282%29.md) — "Monochrome Electric" theme: pure white surfaces, deep black structure, electric blue accent (#2E5BFF). The Tailwind config exposes the design tokens as utility classes (`section-y-*`, `margin-x-*`, `header-x-*`, `header-gap`, `label-gap`, `rule-gap`).

The `.container-page` utility in `app/globals.css` provides the standard page container (`max-w-container` + responsive `margin-x-*` padding).
