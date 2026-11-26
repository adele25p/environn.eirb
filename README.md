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
| Chronicles | `content/chronicles/` |
| Club actualities | `content/actualites/` |
| Calendar events | `data/events.yaml` |
| Team members | `data/team.yaml` |
| Club information (identity, address, contact, links) | `data/club.yaml` |
| Site navigation and base URL | `hugo.toml` |
| Styles and fonts | `assets/css/` and `static/fonts/` |
| Images | `assets/images/` |

### How to add a new chronicle

1. Create a new file in `content/chronicles/` using the command `hugo new chronicles/my-chronicle.md`, replacing `my-chronicle` with a suitable name for your chronicle.
2. Fill in the front matter, including the date, title, synthesis, author, and any other relevant information.
3. Write the content of the chronicle in the body of the file.
4. If the chronicle is ready for publication, set the `draft` field to `false` in the front matter.
5. Commit and push the changes to the `main` branch.

### How to add a new actuality

1. Create a new file in `content/actualites/` using the command `hugo new actualites/my-actuality.md`, replacing `my-actuality` with a suitable name for your actuality.
2. Fill in the front matter, including the title, date, description, and any other relevant information.
3. Write the content of the actuality in the body of the file.
4. If the actuality is ready for publication, set the `draft` field to `false` in the front matter.
5. Commit and push the changes to the `main` branch.

## Deployment

- Serve the content of `public/` at the root of `https://environn.eirb.fr/`.
- Configure the web server to serve `/404.html` (with a 404 status) for unknown URLs.
- Rebuild and deploy on every push to `main`.

## License / Mention

© 2026 Environn’eirb — All rights reserved.