# Rabelo Solutions

A macOS-inspired desktop portfolio built with React and Vite. Features a draggable window system, animated dock, and a CV rendered inside a fake browser window.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Framer Motion** — window animations and drag
- **Lucide React** — icons
- **clsx** + **tailwind-merge** — safe class composition via `cn()`

## Features

- Wallpaper background with overlay
- Fixed navbar with logo and branding
- Desktop icons that open draggable windows
- Windows constrained to the area below the navbar
- Multiple windows cascade with per-window offset
- CV rendered as a browser window with fake address bar
- Bottom dock with open-app indicators
- Live clock status bar
- Mobile-friendly (bottom sheet layout on small screens)

## Getting Started

```bash
npm install
npm run dev
```

Requires Node.js `>=20.19.0`.

## Project Structure

```
src/
  constants/apps.js        # APPS config, WALLPAPER_URL, LOGO_URL
  hooks/useIsMobile.js     # matchMedia-based responsive hook
  lib/utils.js             # cn() helper (clsx + tailwind-merge)
  apps/CVContent.jsx       # CV window content
  components/
    Navbar.jsx
    Dock.jsx
    DesktopIcon.jsx
    Window.jsx
  App.jsx
  index.css
```
