# How to publish a blog post

Only you can publish, because publishing = pushing to this repo.

1. Write your post as a markdown file in this folder: `public/posts/my-post-slug.md`
   (plain markdown — headings with `##`, code blocks with triple backticks, links, lists all work)

2. Add an entry to `public/posts/index.json` (newest first):

   ```json
   {
     "slug": "my-post-slug",
     "title": "The Post Title",
     "date": "August 2026",
     "tag": "AI",
     "summary": "One or two sentences shown on the blog card."
   }
   ```

   The `slug` must match the filename (without `.md`).

3. Preview locally: `nvm use 20 && npm start`, then open http://localhost:3000

4. Publish: commit + push, then `npm run deploy`

The post appears at `https://woooj02.github.io/#/blog/my-post-slug`.
This file (HOW_TO_POST.md) is not listed in index.json, so it never shows on the site.
