# AURORA — GitHub Pages Website (2026–2027)

This is a **fictional fan-made** website, not an official JYP site.

## Upload to GitHub Pages
1. Unzip this package.
2. Upload the **contents of `aurora-website`** to your public GitHub repository root (`index.html` must be at the root).
3. Go to Settings → Pages → Deploy from a branch → main → /(root) → Save.
4. Your URL will be `https://YOURUSERNAME.github.io/REPOSITORY-NAME/`.

## Add a group banner
Save a wide group photo as `images/extras/group-banner.jpg`. The hero will automatically use it, with a pale overlay to keep text readable. Adjust `background-position` and the overlay in `style.css` under `.hero-photo` if needed.

## Add member pictures
Save portrait photos as `images/members/mia.jpg`, `lea.jpg`, `yuri.jpg`, `yejin.jpg`, `yena.jpg`, `chaeyoung.jpg`, `eunhee.jpg`, `chaerin.jpg`, `miju.jpg`, `misa.jpg`, `yerin.jpg`, `mihyun.jpg`. Member cards and popups will show them automatically.

## Add albums, news, videos, and mascots
Open `script.js` and scroll to `EDIT YOUR SITE CONTENT BELOW`. Edit the four arrays:
- `albums`: title, detail, image path (`images/albums/...`). Add each of your albums as another object.
- `news`: date, category, title, summary, image path (`images/news/...`). The two initial items are **sample text**, not canon news.
- `musicVideos`: title, era, thumbnail path (`images/videos/...`), and `url` (optional YouTube URL). Empty URL shows “video link coming soon.” Do not link other artists' official videos as if they are real AURORA uploads.
- `mascots`: initially creates twelve **unnamed placeholders**, one per member. Edit each object's name, description, and image after deciding your mascot designs. Upload pictures to `images/mascots/mia.png`, etc.

## Tips
- Use lowercase filenames with no spaces. Paths are case-sensitive.
- JPG/PNG/WebP all work, but update the extension in code if not JPG/PNG.
- Use wide images for banners, square images for albums and mascots, 16:9 for music-video thumbnails, and vertical portraits for members.
- Commit your changes in GitHub and allow a few minutes for GitHub Pages to rebuild.
- Keep the site labeled as a fictional fan project and use images you have permission to publish.

## Member profiles
Edit the `members` list at the beginning of `script.js` to update role, birthday, MBTI, color and symbol. Fun facts have been removed from the website pop-up profiles (the existing facts arrays remain in source but are not displayed).


### Zodiac signs, deities and symbols
The member profiles now display zodiac sign and representative Greek deity. Edit `zodiac`, `deity`, or `symbol` for any member in `script.js`. Mihyun's symbol is 🍒 (cherry), distinct from Lea's ✧. All other files and site sections are retained.
