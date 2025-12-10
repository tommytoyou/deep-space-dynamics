# Deep Space Dynamics - Frontend

Official marketing website for Deep Space Dynamics, a space technology company building persistent deep space infrastructure using Neuman-class spacecraft at Lagrange points.

## Tech Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Create React App** - Build tooling

## Features

- Responsive design (mobile-first)
- Dark theme with custom color palette (navy, accent, solar)
- Animated starfield background
- Glass-morphism UI effects
- Contact form with validation
- Hash-based navigation for product sections

## Project Structure

```
src/
├── components/
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── ProductsPreview.jsx
│   │   ├── Stats.jsx
│   │   └── Customers.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ScrollToTop.jsx
├── context/
│   └── ThemeContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── styles/
│   └── design-tokens.css
├── App.jsx
├── index.js
└── index.css
```

## Local Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run eject` | Eject from CRA (one-way) |

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

Or use the Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=build
```

### Environment Variables

No environment variables are required for the frontend. The contact form currently logs to console (backend integration TODO).

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with hero, products preview, stats |
| `/products` | Products | TSWI-AI, Neuman Constellation, Data API |
| `/products#tswi-ai` | Products | Jump to TSWI-AI section |
| `/products#constellation` | Products | Jump to Constellation section |
| `/products#api` | Products | Jump to API section |
| `/about` | About | Company story, team, timeline |
| `/contact` | Contact | Contact form and info |

### Legacy Redirects

- `/product` → `/products`
- `/team` → `/about`
- `/mission` → `/about`
- `/technology` → `/products`

## Design System

### Colors

- **Navy**: `#050B14` (900), `#0A1628` (800), `#0F2140` (700)
- **Accent**: `#00D4AA` (teal/cyan)
- **Solar**: `#FF6B35` (orange)
- **Slate**: Standard Tailwind slate palette

### Typography

- **Headings**: Space Grotesk
- **Body**: Inter

## Contributing

1. Create a feature branch
2. Make changes
3. Run `npm run build` to verify no errors
4. Submit PR

## License

Proprietary - Deep Space Dynamics, Inc.
