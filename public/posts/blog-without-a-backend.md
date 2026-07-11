This site is a static React app on GitHub Pages, which means there is no server to talk to — no database, no API, nowhere to POST a new blog entry. So how do you build a blog on top of that where only the owner can write?

The answer is that the access control already exists: it's git.

## The design

Each post is a plain markdown file in the repo, under `public/posts/`. A small `index.json` manifest in the same folder lists every published post with its slug, title, date, and summary.

The React side does two things:

- The **blog section** on the home page fetches `index.json` and renders a card per entry. If the manifest is empty, the section doesn't render at all.
- A **post route** (`/#/blog/<slug>`) looks the slug up in the manifest, fetches the matching `.md` file, and renders it to HTML with [marked](https://github.com/markedjs/marked).

Routing uses a hash router because GitHub Pages serves a static file tree — there's no server-side rewrite to catch `/blog/foo` and hand it to the app, but everything after `#` never leaves the browser.

## Why "only I can write" needs no auth code

A CMS needs login, sessions, and roles because the write path goes through the server. Here, the write path is:

1. Write a markdown file
2. Add one entry to `index.json`
3. Commit, push, deploy

Every step requires push access to the repository. Readers get static files over a CDN; writers need my SSH key. That's a stronger guarantee than most login forms, and the whole "admin panel" is a text editor.

There are real trade-offs — no drafts with previews short of running the dev server, no comments, no scheduled publishing. For a personal engineering blog, none of those matter much. Posts are version-controlled, diffable, and impossible to lose.

## What it cost

About 120 lines of React across two components, one dependency (`marked`), and zero infrastructure. The entire blog deploys with the rest of the site in the same `npm run deploy`.

The general lesson: before building an auth system, check whether the permission boundary you need already exists somewhere in your stack. Here, GitHub's was already better than anything I would have written.
