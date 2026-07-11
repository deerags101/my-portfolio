# 🚀 Setup Guide — Make This Portfolio Your Own

This portfolio template is built so that **anyone forking it can personalize it
in minutes**, without touching design or animation code. Follow these steps.

## 1. Install dependencies

```bash
npm install
```

## 2. Set up Supabase (free database + auth)

1. Go to [supabase.com](https://supabase.com) and create a free account + new project.
2. In your Supabase project, open **SQL Editor** → paste the contents of
   `backup.sql` (in the repo root) → Run. This creates the `projects`,
   `certificates`, `tech_stack`, and `comments` tables you need.
3. Go to **Project Settings → API** and copy:
   - `Project URL`
   - `anon public` key
4. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Paste your Project URL and anon key into it.
5. To be able to log in to `/admin`, go to **Authentication → Users** in
   Supabase and manually add yourself as a user (email + password). That's
   the login you'll use at `/admin/login`.

## 3. Personalize your content — ONE file to edit

Open **`src/config/site.ts`**. Every piece of personal content on the site
lives here:

| Field | What it controls |
|---|---|
| `meta.title` / `meta.description` | Browser tab title & SEO |
| `brand.navbarText` / `brand.domainText` | Navbar logo text & welcome-screen domain pill |
| `hero.*` | Landing section heading, typing animation roles, skill badges, description |
| `about.*` | Your name, bio, quote, CV link, profile photo path |
| `contact.*` | Contact section headings and intro text |
| `socials.*` | LinkedIn / Instagram / YouTube / GitHub / TikTok links |
| `footer.*` | Footer copyright name & year |

Just replace the placeholder strings with your own — no need to touch any
other file for text content.

## 4. Replace your images

- `public/assets/PP.png` → your profile photo (used in About section)
- `public/assets/bandd.png`, `public/assets/kartu.glb` → decorative Hero
  assets, replace if you want a different visual, or leave as-is

## 5. Add your own projects, certificates & tech stack

Once Supabase is connected and you've logged into `/admin`, use the admin
dashboard to add your real projects, certificates, and tech stack icons —
no code required, they're pulled live from your database.

## 6. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 7. Deploy

Easiest option: push this repo to GitHub, then import it on
[vercel.com](https://vercel.com/new). Add your two env vars
(`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the Vercel
project settings, and deploy.

---

That's it — same design and animations, fully your own content and data. 🎉
