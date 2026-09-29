# EduMap

**Live site:** [edumap.daniel-liu.dev](https://edumap.daniel-liu.dev)

EduMap is an interactive website designed to support incoming university students, particularly high school graduates in making informed decisions about their degree and university life.

Built by a team of 6 as a UTS capstone project.

<!-- Screenshot: save one as docs/screenshot.png, then uncomment the line below -->
<!-- ![EduMap home page](docs/screenshot.png) -->

## Three MVP features

- Course Questionnaire --> Helps students identify suitable courses and connect with peers who share similar academic interests.
- Job Prospects Tool --> Provides insights into career pathways linked to different degrees, offering clarity on future opportunities.
- Buddy Program --> Connects students with experienced mentors to ease the transition into university life through ongoing peer-led support.

By combining these features into a cohesive digital experience, EduMap empowers students to confidently navigate their academic and social journey, reducing feelings of uncertainty and isolation while improving first-year retention and engagement.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, React-Leaflet
- **Backend:** ASP.NET Core 9 API with Entity Framework Core
- **Database:** Neon Postgres
- **Hosting:** Azure App Service behind Cloudflare Workers
- **CI/CD:** GitHub Actions

## Architecture

```
Browser
  │
  ▼
Cloudflare Worker  (edumap.daniel-liu.dev)
  │  proxies every request
  ▼
Azure App Service
  ├── React build, served as static files from wwwroot
  └── ASP.NET Core 9 API under /api
        │  Entity Framework Core
        ▼
      Neon PostgreSQL
```

- The React app is a single-page app. The App Service serves the built files from `wwwroot` and the API from the same origin.
- The Cloudflare Worker sits in front of the App Service and serves the site on the custom domain.

## How deploys work

1. Merge a pull request into `main`. The **Frontend Build** workflow in this repo builds the site with `VITE_API_URL=/api` and uploads the `dist` folder as an artifact named `frontend-dist`. This step does not deploy anything by itself.
2. In the EduMap-Backend repo, go to **Actions → .NET Backend CI/CD → Run workflow**. It downloads the latest `frontend-dist` artifact and deploys it with the API to Azure App Service.
3. Check https://edumap.daniel-liu.dev in a private window. If old files still show, purge the Cloudflare cache.

## My contributions

<!-- Replace these placeholders with your own work -->

- _Placeholder: feature or area you owned_
- _Placeholder: technical problem you solved_
- _Placeholder: infrastructure or tooling you set up_

## Running locally

You need Node 20 and the EduMap backend running locally on port 5046.

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Create `.env.development` in the project root so the app talks to your local API:
   ```
   VITE_API_URL=http://localhost:5046/api
   ```
3. Start the dev server and open the URL it prints (usually http://localhost:5173):
   ```bash
   npm run dev
   ```

Restart `npm run dev` after changing any `.env` file.

## Project Structure

```
EduMap/
├── .github/workflows/        # CI build workflow
├── public/                   # Favicons, manifest, robots.txt, sitemap.xml, og-image.png
├── scripts/                  # One-off generators for the icons and link preview image
├── src/
│   ├── api/                  # Backend calls (axios)
│   │   ├── client.js         #   shared axios instance + base URL (VITE_API_URL)
│   │   ├── auth.js           #   login / register
│   │   ├── booking.js        #   mentors & bookings
│   │   └── events.js         #   map markers & saved events
│   ├── assets/               # Images and logos
│   ├── components/           # Reusable, feature-agnostic UI
│   │   ├── layout/           #   Navbar, Footer, Background, PageLayout, ContentPage
│   │   └── ui/               #   Card, Alert, Modal, Tabs, Icons, StarRating, FormField, ...
│   ├── config/
│   │   ├── routes.js         # PATHS + nav/footer link lists (single source of truth for URLs)
│   │   └── site.js           # Site URL, contact details, tagline, copyright
│   ├── features/             # Feature-specific components, hooks and data
│   │   ├── about/  auth/  buddy/  home/  legal/  map/  profile/  questionnaire/
│   ├── hooks/                # Generic hooks (useToggleList, usePageMeta)
│   ├── lib/                  # Pure helpers: auth token storage, time formatting, cx, arrays
│   ├── pages/                # One thin component per route, composed from features/
│   ├── App.jsx               # Route table
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

### Conventions

- **Pages stay thin.** They own page-level state and compose components from `features/` and `components/`.
- **Content lives in data files** (`*Content.js`, `*Data.js`, `*Constants.js`), not inline in JSX.
- **URLs come from `config/routes.js`.** Never hard-code a path string.
- **Auth token access goes through `lib/auth.js`** (`getToken`, `setToken`, `clearToken`, `authConfig`).
- **Tailwind classes must be complete literal strings** (for example a lookup map of `'bg-red-500'`), never built by string concatenation.

## Pitch

https://www.youtube.com/watch?v=X8FN5wrJ-vI

## License

This project is licensed under the MIT License.
