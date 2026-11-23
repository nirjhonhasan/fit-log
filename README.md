# FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion. Pick a lift, lock it into today's plan, and watch the week's work add up.

**Live demo:** https://fit-log-three-delta.vercel.app/

## Features

1. **Workout library** — browse lifts covering every major muscle group, with duration, calories and rating at a glance.
2. **Workout details** — description, muscle groups, equipment, sets/reps and step-by-step instructions.
3. **Today's plan** — add lifts to today's plan and see total exercises, minutes and calories.
4. **Saved for later** — bookmark workouts and move between *Today's Plan* and *Saved* tabs.
5. **Sorting** — sort your list by duration, rating or calories.
6. **Responsive, themed UI** — one consistent dark theme with a lime accent, tuned for mobile, tablet and desktop.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4 with DaisyUI (custom `fitlog` theme in `src/app/globals.css`)
- React Context API for plan and saved state
- React Toastify for notifications
- React Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint`  | Lint the code            |

## Project structure

```
src/
├── app/             # Routes: home, /my-plan, /workouts/[id], global styles
├── Components/      # Navbar, banner, cards, plan lists and buttons
├── context/         # Plan and tab state providers
├── Types/           # Shared TypeScript types
└── assets/          # Logo and banner images
```

## Theming

Colors are defined once in `src/app/globals.css` (`accent`, `surface`, `surface-2`, `line`, `muted`). Use those tokens instead of hardcoded hex values.
