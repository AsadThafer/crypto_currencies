# CoinScope — Crypto Market Dashboard

A modern, responsive **Dark Fintech** cryptocurrency dashboard built with React, Vite, Recharts and the CoinGecko API. This is a full redesign of the original 2022 Crypto Currencies project.

## Features
- Global market cap, 24-hour volume, BTC dominance and active coin count
- Top 100 assets with search, sorting, pagination, 7-day mini charts
- Detailed coin modal with selectable 24h / 7d / 30d / 90d price history
- Market-cap distribution for the top 100 returned assets (not the entire global market)
- Watchlist stored in your browser's `localStorage`
- Responsive dark UI, loading/error states, request timeout and API response caching
- Auto-refresh every 2 minutes (cached data may remain for up to 90–120 seconds)

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Netlify

1. Push the project to GitHub (the directory containing `package.json` should be your Netlify base directory).
2. In Netlify, **Add new project → Import an existing project** and select your repository.
3. Build command: `npm run build`; publish directory: `dist`. These are also configured in `netlify.toml`.
4. Deploy. SPA redirects are already configured.

Alternatively, drag and drop the `dist` directory after `npm run build` to Netlify's manual deploy page.

## API and limitations

Uses CoinGecko public API endpoints:
- `/coins/markets` for the top 100 coins and sparkline history
- `/global` for global statistics
- `/coins/{id}/market_chart` for detail charts

The public CoinGecko API can return **429** rate-limit responses. Coin detail charts may be restricted depending on the API plan. This project shows meaningful errors and preserves already loaded data where possible. For reliable production use, implement a Netlify Function proxy with server-side rate limiting and caching; do **not** expose private paid API credentials via `VITE_` variables. An optional public Demo API key can be set via `VITE_COINGECKO_DEMO_KEY` (it is exposed in the client bundle).

No trading, accounts, or financial advice is provided. Watchlists are local to the browser and do not sync across devices.

## Stack

React 18 · Vite 6 · Recharts · Lucide React · CSS

## Credits

Market data by [CoinGecko](https://www.coingecko.com/).

## Project history and authorship

Originally created by **Asad Asad** in 2022 as Crypto Currencies. Rebuilt as CoinScope, a React/Vite fintech dashboard. The original version remains available in Git history (and can be preserved as a `legacy` branch).

- Portfolio: https://asadthafer.github.io/
- Live site: https://asad-cryptocurrency.netlify.app/
- Repository: https://github.com/AsadThafer/crypto_currencies

## Update the existing repository and Netlify site

Keep the existing GitHub repository and existing Netlify site; do not create a new Netlify project. Preserve the old code on a `legacy` branch before replacing the main branch. In the existing Netlify site, verify that the connected repository and production branch (`main` or your current default branch) are correct, and that build command is `npm run build` and publish directory is `dist`. This keeps the existing `asad-cryptocurrency.netlify.app` URL.
