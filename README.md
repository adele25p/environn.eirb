# Environn’eirb - The Website 🌐 🌱
Static showcase website and weekly eco chronicle for Environn'eirb club.

## Requirements

- [Hugo](https://gohugo.io/installation/) **extended**, version 0.146 or later
- [Node.js](https://nodejs.org/) (only used to build the CSS with Tailwind)

## Development

```bash
npm install     # once: installs Tailwind CSS
npm run dev     # local server on http://localhost:1313, with live reload
```

## Build

```bash
npm ci          # clean install from package-lock.json
npm run build   # outputs the complete static site in public/
```

The site is 100% static: `public/` is all that needs to be served, no server-side runtime.

## Content

| What | Where |
|---|---|
| Chronicles | `content/chronicles/` (create one with `hugo new chronicles/my-chronicle.md`) |
| Team members | `data/team.yaml` |
| "Join us" cards | `data/join_roles.yaml` |
| Club information (identity, address, contact, links) | `data/club.yaml` |
| Site title | `hugo.toml` |
| Navigation menu | `hugo.toml` (`[[menus.main]]`) |
| Colors, fonts, radii | `assets/css/main.css` |
| Images (mascot, team photos, chronicle covers) | `assets/images/` |

Chronicles use their `date` as their publication date. A chronicle dated in the future stays hidden until the first build on or after that date. The `draft` field is a safety switch: `draft: true` keeps a chronicle out of production even when its publication date has arrived; set it to `false` to publish it. Each chronicle also declares an `author` and optional `contributors`.

## Deployment

- Serve the content of `public/` at the root of `https://environn.eirb.fr/`.
- Configure the web server to serve `/404.html` (with a 404 status) for unknown URLs.
- Rebuild **once a day** (e.g. a cron job running the build commands above), otherwise chronicles scheduled for a future date only appear at the next manual build.

## License / Mention

© 2026 Environn’eirb — All rights reserved.