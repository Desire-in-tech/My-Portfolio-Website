# Desire Eyotaru — Portfolio

> Personal portfolio website for **Desire Eyotaru**, Software Engineer & AI Developer specialising in machine learning, backend APIs, and data-driven solutions.

**Live site:** _add your Vercel URL here after deploying_

---

## Features

- **Animated hero section** with availability badge and stats
- **Projects gallery** — 6 real projects with GitHub links and live demos
- **About page** — background, skills, and tech stack breakdown
- **Contact form** — sends emails directly to your inbox via EmailJS (no backend needed)
- **Resume download** — one-click PDF download from the navbar
- **Fully responsive** — looks great on all screen sizes
- **Smooth animations** — powered by Framer Motion throughout

---

## Tech Stack

| Area | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Email | EmailJS |
| Deployment | Vercel |

---

## Project Structure

```
portfolio/
├── index.html                 # App entry point
├── vite.config.ts             # Vite build config
├── tailwind.config.js         # Tailwind theme (colors, fonts, animations)
├── tsconfig.json              # TypeScript config
├── vercel.json                # Vercel SPA routing rules
├── .env.example               # Required environment variable names
│
├── public/
│   ├── documents/
│   │   └── Resume.pdf         # Downloadable resume
│   └── images/                # Page backgrounds + project screenshots
│
└── src/
    ├── main.tsx               # React entry point
    ├── App.tsx                # Router + layout
    ├── index.css              # Global styles + Tailwind base
    │
    ├── pages/
    │   ├── Home.tsx           # Hero, stats, featured projects
    │   ├── About.tsx          # Background, skills, timeline
    │   ├── Projects.tsx       # Full project grid with filters
    │   └── Contact.tsx        # EmailJS contact form + social links
    │
    ├── components/
    │   ├── Navbar.tsx         # Fixed top nav with mobile menu
    │   ├── Footer.tsx         # Footer with links
    │   ├── ProjectCard.tsx    # Reusable project card
    │   ├── AnimatedSection.tsx # Scroll-triggered fade-in wrapper
    │   ├── PageTransition.tsx # Page-to-page animation wrapper
    │   └── SkillBadge.tsx     # Tech skill badge component
    │
    └── data/                  # All content lives here — edit to update the site
        ├── profile.ts         # Name, email, phone, location, availability
        ├── projects.ts        # Projects list with GitHub + demo links
        ├── skills.ts          # Skills and proficiency levels
        └── socials.ts         # GitHub and LinkedIn URLs
```

---

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) (or npm / yarn)

### 1. Clone the repo

```bash
git clone https://github.com/Desire-in-tech/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Copy the example file and fill in your EmailJS credentials:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> See the [EmailJS Setup](#emailjs-setup) section below for how to get these values.

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## EmailJS Setup

The contact form sends emails directly from the browser — no server required.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. **Add an Email Service** → Email Services → Add New Service → choose Gmail → connect your account. Copy the **Service ID**.
3. **Create a Template** → Email Templates → Create New Template. Use these variables in the body:

   ```
   From: {{from_name}} ({{from_email}})
   
   {{message}}
   ```

   Set the subject to: `New message from {{from_name}} — Portfolio`
   Copy the **Template ID**.

4. **Get your Public Key** → Account → General → Public Key

Add all three values to your `.env.local` file (locally) and to your Vercel environment variables (in production).

---

## Customising Your Content

All site content lives in `src/data/` — no need to touch the component files:

| File | What to change |
|---|---|
| `profile.ts` | Your name, title, email, phone, location, availability status |
| `projects.ts` | Add/edit/remove projects — title, description, tech stack, GitHub link, demo link, image |
| `skills.ts` | Your skills and proficiency levels |
| `socials.ts` | Your GitHub and LinkedIn profile URLs |

To replace your **resume**, swap out `public/documents/Resume.pdf` (keep the same filename).

To replace **page images**, drop new files into `public/images/` (keep the same filenames).

---

## Deployment on Vercel

### Option A — Automatic (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import your GitHub repo
3. Leave all build settings as defaults (Vercel auto-detects Vite)
4. Go to **Settings → Environment Variables** and add all three `VITE_EMAILJS_*` variables
5. Click **Deploy**

Every push to `main` will trigger a new deployment automatically.

### Option B — Vercel CLI

```bash
pnpm install -g vercel
vercel
```

Follow the prompts, then add environment variables in the Vercel dashboard.

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build for production (output → `dist/`) |
| `pnpm preview` | Preview the production build locally |
| `pnpm typecheck` | Run TypeScript type checking |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

**Desire Eyotaru** — [desireintech@gmail.com](mailto:desireintech@gmail.com)

- GitHub: [@Desire-in-tech](https://github.com/Desire-in-tech)
- LinkedIn: [desire-e-92935a363](https://www.linkedin.com/in/desire-e-92935a363)
