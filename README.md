# EduMap

EduMap is an interactive website designed to support incoming university students, particularly high school graduates in making informed decisions about their degree and university life.

## Three MVP features

- Course Questionnaire --> Helps students identify suitable courses and connect with peers who share similar academic interests.     
- Job Prospects Tool --> Provides insights into career pathways linked to different degrees, offering clarity on future opportunities.   
- Buddy Program --> Connects students with experienced mentors to ease the transition into university life through ongoing peer-led support.

By combining these features into a cohesive digital experience, EduMap empowers students to confidently navigate their academic and social journey, reducing feelings of uncertainty and isolation while improving first-year retention and engagement.

## Tech Stack

- Frontend: React, Vite, React-Leaflet
- Styling: TailWindCSS
- Routing: React Router
- Deployment: Azure (CI/CD)

## Project Structure

```
EduMap/
├── .github/workflows/        # CI build workflow
├── public/
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
│   │   └── site.js           # Contact details, tagline, copyright
│   ├── features/             # Feature-specific components, hooks and data
│   │   ├── about/  auth/  buddy/  home/  legal/  map/  profile/  questionnaire/
│   ├── hooks/                # Generic hooks (useToggleList)
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

- **Pages stay thin** – they own page-level state and compose components from `features/` and `components/`.
- **Content lives in data files** (`*Content.js`, `*Data.js`, `*Constants.js`), not inline in JSX.
- **URLs come from `config/routes.js`**; never hard-code a path string.
- **Auth token access goes through `lib/auth.js`** (`getToken`, `setToken`, `clearToken`, `authConfig`).
- **Tailwind classes must be complete literal strings** (e.g. a lookup map of `'bg-red-500'`), never built by string concatenation.

## Pitch

https://www.youtube.com/watch?v=X8FN5wrJ-vI

## License
This project is licensed under the MIT License.
