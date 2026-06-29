# Study Logging

A static personal blog that can be hosted directly on GitHub Pages. There is no build step, so `index.html` can be opened locally in a browser.

## Structure

- `index.html`: home page, search, tag filters, and recent posts
- `about.html`: about page
- `posts/`: individual post HTML files
- `assets/css/styles.css`: site-wide styles
- `assets/js/main.js`: theme toggle, search, tag filters, and reading progress
- `assets/images/blog-banner.png`: home banner image

## Add a Post

1. Copy an existing file in `posts/` and create a new HTML file.
2. Update the new post's `<title>`, `<meta name="description">`, `<h1>`, date, and body.
3. Add a new post card `<article>` inside `post-grid` in `index.html`.
4. Update the card's `data-tags`, `data-title`, link, date, and summary.

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
2. Push this folder to that repository.
3. In the repository, open `Settings` -> `Pages` and choose `Deploy from a branch`.
4. Set the branch to `main` and the folder to `/root`.

If the repository is `https://github.com/<user>/<repo>`, the deployed site is usually available at `https://<user>.github.io/<repo>/`. If the repository is named `<user>.github.io`, the site is available at `https://<user>.github.io/`.

Official documentation:

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Customize

- Replace `Study Logging` with your preferred blog name.
- Replace the `WK` brand mark.
- Replace `https://github.com/` with your GitHub profile URL.
- Update the introduction in `about.html`.
- Replace `assets/images/blog-banner.png` if you want a different banner.
