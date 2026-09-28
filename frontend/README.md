# DevPilot — Frontend

React + Tailwind frontend for DevPilot, matching the provided UI mockups: Landing, Auth,
Onboarding, Dashboard, Projects, Repository Analysis, AI Assistant (RAG chat), Test
Generation, Test Results & AI Failure Analysis, CI/CD Deployments, and Monitoring.

## Stack

- **React 18** + **Vite** — fast dev server and build
- **React Router v6** — routing between all screens
- **Tailwind CSS** — utility-first styling, fully responsive
- **Recharts** — charts on the Test Results and Monitoring pages
- **lucide-react** — icon set

No backend is wired up — all data comes from `src/data/mockData.js` so you can see the
full UI immediately. Swap that file's exports for real API calls (e.g. to your FastAPI
backend) when ready; component props/shapes are designed to match 1:1.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173. It opens on the Landing page — click "Get Started Free"
or "Sign In" to reach the app shell at `/app/dashboard`.

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## File structure

```
devpilot-frontend/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js          # color tokens (base/accent/cyan/success/warning/danger)
├── postcss.config.js
└── src/
    ├── main.jsx                 # React root + BrowserRouter
    ├── App.jsx                  # all route definitions
    ├── index.css                # Tailwind base + shared component classes (.card, .btn-primary, ...)
    ├── data/
    │   └── mockData.js          # all mock data used across pages — swap for API calls
    ├── components/
    │   ├── layout/
    │   │   ├── AppLayout.jsx    # sidebar + topbar shell, wraps all /app/* routes
    │   │   ├── Sidebar.jsx      # left nav, collapsible on mobile
    │   │   └── Topbar.jsx       # page title, search, notifications, mobile menu button
    │   └── ui/
    │       ├── Logo.jsx
    │       ├── StatCard.jsx     # dashboard/monitoring metric tiles
    │       ├── Badge.jsx        # status pills (success/warning/danger/neutral)
    │       └── ProgressBar.jsx  # gradient progress bar (pass rate, pipeline progress)
    └── pages/
        ├── Landing.jsx          # public marketing page (route: /)
        ├── Login.jsx            # sign in / sign up (route: /login)
        ├── Onboarding.jsx       # 4-step onboarding flow (route: /onboarding)
        ├── Dashboard.jsx        # route: /app/dashboard
        ├── Projects.jsx         # project list, route: /app/projects
        ├── AddProject.jsx       # connect GitHub repo, route: /app/projects/new
        ├── RepoAnalysis.jsx     # clone/parse/embed pipeline, route: /app/projects/analysis
        ├── ProjectOverview.jsx  # tabbed repo insights, route: /app/projects/overview
        ├── AIAssistant.jsx      # RAG chat, route: /app/assistant
        ├── TestGeneration.jsx   # AI test case generation, route: /app/tests
        ├── TestResults.jsx      # donut chart + AI failure analysis, route: /app/tests/results
        ├── Deployments.jsx      # CI/CD pipeline visualization, route: /app/deployments
        ├── Monitoring.jsx       # charts dashboard, route: /app/monitoring
        └── Settings.jsx         # route: /app/settings
```

## Design tokens (tailwind.config.js)

| Token          | Hex       | Usage                          |
|----------------|-----------|---------------------------------|
| `base-900`     | `#0b0e1a` | page background                 |
| `base-800`     | `#111527` | panels, topbar                  |
| `base-700`     | `#1a1f36` | cards                           |
| `base-600`     | `#252b47` | borders, hover states           |
| `accent`       | `#7c6cf6` | primary purple (buttons, active nav) |
| `cyan`         | `#3ddcd7` | secondary accent (charts, tags) |
| `success`      | `#3fd68c` | passed tests, healthy status    |
| `warning`      | `#f5b855` | pending/attention states        |
| `danger`       | `#f2617a` | failed tests, errors            |

## Responsive behavior

- Sidebar becomes an off-canvas drawer below the `lg` breakpoint (opened via the topbar
  hamburger icon), fixed/sticky on desktop.
- All grids (`stats`, `project cards`, `charts`) collapse from 3–4 columns down to 2 or 1
  column using Tailwind's `sm:` / `lg:` prefixes.
- Tables/lists that could overflow (pipeline steps, repo structure) scroll horizontally
  or wrap instead of breaking layout.

## Next steps to connect a real backend

1. Replace the arrays/objects exported from `src/data/mockData.js` with `fetch`/`axios`
   calls to your FastAPI backend (e.g. `GET /api/projects`, `POST /api/tests/generate`).
2. Add an auth context (JWT from your `authService.ts`) and guard the `/app/*` routes.
3. Wire `AIAssistant.jsx`'s `handleSend` to your RAG endpoint instead of the mocked timeout.
4. Wire `RepoAnalysis.jsx`'s progress polling to real pipeline status (e.g. via
   WebSocket or polling `GET /api/projects/:id/analysis-status`).
