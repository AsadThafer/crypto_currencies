# CoinScope production SEO update

- Static HTML metadata: title, description, canonical, robots, author.
- Social preview: Open Graph and X/Twitter tags. JPG fallback and WebP optimized asset.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, Apple icon, ICO favicon.
- JSON-LD WebApplication schema and Node 22 for Netlify.
- Existing dashboard logic and styling retained.

## Deploy
Push the contents to the existing GitHub repository main branch, keeping the same Netlify site connected. Build `npm run build`, publish `dist`, base empty. After deployment check `/og-image.jpg`, `/robots.txt`, `/sitemap.xml`, and page source. Test with Facebook Sharing Debugger and Google Search Console URL Inspection.

Note: This is a client-rendered React SPA. Metadata is static and crawlable, but deeper indexing of live market rows can benefit from SSR/prerendering later. No rankings or indexing can be guaranteed.
