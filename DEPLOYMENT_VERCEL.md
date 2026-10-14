# Vercel Deployment Guide for L'Étoile Parlour & Salon

This repository is fully configured for seamless, zero-config deployment to **Vercel** with Next.js 16 App Router, TypeScript, and Tailwind CSS.

---

## 🚀 Option 1: Deploy via Vercel Web Dashboard (Recommended & Automatic CI/CD)

Since your project is already connected and pushed to GitHub at [https://github.com/mfsikalyan/parlour](https://github.com/mfsikalyan/parlour):

1. Go to the [Vercel Dashboard](https://vercel.com/new).
2. Log in with your GitHub account.
3. Under **"Import Git Repository"**, locate or search for `mfsikalyan/parlour` and click **Import**.
4. Configure the project:
   - **Project Name:** `parlour` (or `letoile-parlour`)
   - **Framework Preset:** `Next.js` (automatically detected)
   - **Root Directory:** `./`
   - **Build & Output Settings:** Leave default (`next build`)
   - **Environment Variables:** None required out of the box!
5. Click **Deploy**.
6. Within ~60 seconds, your site will be live at `https://parlour-[your-username].vercel.app` with instant global Edge CDN, SSL, and preview URLs on every future Git push!

---

## ⚡ Option 2: Deploy via Vercel CLI

If you prefer deploying directly from your local terminal:

1. In the project directory (`d:\Practice Projects\Parlour`), run:
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts:
   - **Set up and deploy?** `Y`
   - **Which scope?** (Select your personal or team account)
   - **Link to existing project?** `N`
   - **Project Name:** `parlour-website` (or press Enter)
   - **In which directory is your code located?** `./`
   - **Auto-detected Project Settings:** Press `Enter` (Next.js is pre-configured).
3. Once the preview deployment completes, deploy to production:
   ```bash
   npx vercel --prod
   ```

---

## ⚙️ Configuration Details (`vercel.json`)

The [`vercel.json`](file:///d:/Practice%20Projects/Parlour/vercel.json) file guarantees explicit Next.js detection:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "buildCommand": "npm run build"
}
```

### Key Architectural Highlights on Vercel:
- **Serverless API Routes:** `/api/book` and `/api/contact` automatically execute as isolated Vercel Serverless Functions.
- **Dynamic SEO & Metadata:** Dynamic sitemap (`/sitemap.xml`) and robot rules (`/robots.txt`) render dynamically.
- **Static Pages & Incremental Static Generation:** 40+ prerendered pages (service catalogue, bridal suites, lookbook, journal, and team bios) are served from Vercel's global Edge Cache with sub-millisecond TTFB.
