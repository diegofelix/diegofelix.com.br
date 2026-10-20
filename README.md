# diegofelix.com.br

My personal website and blog.

Built with [Vue 3](https://vuejs.org/), [Vite](https://vite.dev/), [Tailwind CSS 4](https://tailwindcss.com/) and
[vite-ssg](https://github.com/antfu-collective/vite-ssg). Every page is prerendered to static HTML at build time and
served by nginx.

## Development

Requires Node `^20.19.0 || >=22.12.0`.

```sh
npm install
npm run dev       # dev server with hot reload
npm run build     # type-check + prerender into dist/
npm run preview   # serve dist/ locally
npm run lint      # oxlint + eslint
```

## Writing a post

Create a markdown file in `src/content/posts/` named `YYYY-MM-DD-slug.md`:

```md
---
title: "Post title"
slug: "post-slug"            # optional, defaults to the file name without the date
date: "2026-10-20"
category: "Backend"
tags: ["php", "laravel"]
description: "Shown in the post list, meta description and RSS."
image: "/images/posts/post-slug.jpg"   # optional, used as header and og:image
published: true
---

Post content (don't repeat the title as an `# h1`, the page already renders it).
```

- Only posts with `published: true` are listed, prerendered and bundled. Drafts never reach `dist/`.
- Post images go in `public/images/posts/` (keep them around 1200px wide and under 200 KB).
- Sitemap (`/sitemap.xml`) and RSS feed (`/rss.xml`) are generated automatically from the frontmatter (`build/posts.ts`).

## Deploy

The `Dockerfile` builds the site and serves `dist/` with nginx (`.docker/nginx.conf`).

```sh
docker compose up -d --build          # http://localhost:8080 (override with PORT=80)
```
