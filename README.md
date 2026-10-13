# AURORA — Interactive Fan Universe

A fictional, fan-made AURORA website designed for a Wattpad story set in 2026–2027. Not affiliated with JYP Entertainment or any real artist.

## Files
- `index.html` — page structure and wording
- `style.css` — colors, typography, mobile layout and effects
- `script.js` — member profiles and interactive desktop folders

## Publish with GitHub Pages
1. Sign in to GitHub and create a **public** repository named `aurora-website`.
2. Click **Add file → Upload files** and upload `index.html`, `style.css`, and `script.js` from this folder. They must be in the repository's **top level**, not inside a subfolder.
3. Click **Commit changes**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose **main** and **/(root)**, then **Save**.
7. Wait a few minutes. Visit `https://YOUR-GITHUB-USERNAME.github.io/aurora-website/`.

## Customize
- **Member bios:** edit the `members` array at the top of `script.js`.
- **Interactive folder contents:** edit `folderContent` in `script.js`.
- **Homepage text and album cards:** edit `index.html`.
- **Colors and spacing:** edit `style.css`.
- **Member portraits:** the first version deliberately uses color-symbol placeholders. You can replace them with properly licensed/authorized images later.
- **Socials:** @weareaurora is displayed as a fictional handle, not a live link.

## Notes
- No backend, database, sign-in or server is needed.
- The RORIE Room is a curated fictional message display, **not** a live guestbook. GitHub Pages is static hosting; a real guestbook would need a separate service.
- Fonts are loaded from Google Fonts. If offline, the site uses fallback fonts.
- For the simplest editing experience, use GitHub's pencil (Edit) icon on a file, then commit changes.
