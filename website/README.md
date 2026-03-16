# Vetale Browser — Website

This is the Next.js landing page for [Vetale Browser](https://github.com/Developer3421/Vetale-Browser-Official), a modern Windows desktop browser with local AI, a highly customizable Fluent-like UI, and built-in power-user tools.

The site is automatically deployed to **GitHub Pages** via the workflow in `.github/workflows/deploy-website.yml`.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- TypeScript
- Tailwind CSS v4
- System font stack (Segoe UI, system-ui, -apple-system)

## Development

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Production build (local, no basePath)
npm run build

# Production build for GitHub Pages (/Vetale-Browser-Official basePath)
npm run build:pages
```

## Deployment

The site is deployed automatically to GitHub Pages when changes to `website/**` are pushed to the `main` branch. It can also be triggered manually via the GitHub Actions `workflow_dispatch` event.

The deployed site is available at:  
**https://developer3421.github.io/Vetale-Browser-Official/**
