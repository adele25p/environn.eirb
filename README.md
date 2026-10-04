# Environn’eirb - The Website 🌐 🌱
Static showcase website and weekly eco micro-journal for Environn'eirb club.

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
| Articles | `content/articles/` (create one with `hugo new articles/my-article.md`) |
| Article categories | `data/categories.yaml` |
| Team members | `data/team.yaml` |
| "Join us" cards | `data/join_roles.yaml` |
| Site title, tagline, Telegram link, contact form | `hugo.toml` (`[params]`) |
| Navigation menu | `hugo.toml` (`[[menus.main]]`) |
| Colors, fonts, radii | `assets/css/main.css` |
| Images (mascot, team photos, article covers) | `assets/images/` |

Articles use their `date` as their publication date. An article dated in the future stays hidden until the first build on or after that date. The `draft` field is a safety switch: `draft: true` keeps an article out of production even when its publication date has arrived; set it to `false` to publish it. Each article also declares an `author` and optional `contributors`.

## Deployment

- Serve the content of `public/` at the root of `https://environn.eirb.fr/`.
- Configure the web server to serve `/404.html` (with a 404 status) for unknown URLs.
- Rebuild **once a day** (e.g. a cron job running the build commands above), otherwise articles scheduled for a future date only appear at the next manual build.
- Contact form: messages go through [Web3Forms](https://web3forms.com) and are delivered by email. The access key is set in `hugo.toml` (`contactFormAccessKey`).

## License / Mention

© 2026 Environn’eirb — All rights reserved.