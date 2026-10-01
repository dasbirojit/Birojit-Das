# Dr. Birojit Das — GitHub Pages website

This is a ready-to-upload static academic website. It needs no subscription, build service, database, npm install or paid domain. Publication and course searches run in the visitor's browser. All paths work on a GitHub user site or a project site.

## Publication status

Prepared for review. **Do not upload to a public repository or enable public hosting until Dr. Das approves publication.** A free GitHub Pages website and its source repository are public. This bundle has no access control or password protection.

## Publish after approval

1. Sign in to GitHub and create a public repository named `YOUR_USERNAME.github.io`, replacing `YOUR_USERNAME` with your actual GitHub username. If that repository already exists, review its contents before replacing anything.
2. Upload the files from this folder directly to the repository root, including `index.html`, `styles.css`, `script.js`, `profile-photo.jpg`, `favicon.svg` and `.nojekyll`. Do not upload the ZIP file itself or place the files inside another folder.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. Wait for GitHub to finish deployment. The URL will be `https://YOUR_USERNAME.github.io/`. Use the actual published URL shown in Settings → Pages. Enable **Enforce HTTPS** when available.

For a project repository named `birojit-das-academic`, the URL is `https://YOUR_USERNAME.github.io/birojit-das-academic/` instead. Relative asset paths are already supported.

Official setup: https://docs.github.com/en/pages/quickstart

## Content that needs confirmation

The profile photograph, dated previous appointments and WhatsApp number were supplied by Dr. Das. Only supplied academic details are used. Google Scholar, Scopus Author ID, ORCID, ResearchGate and institutional profile URLs remain explicitly marked **to confirm**. They are not linked to generic pages or guessed profiles.

The Ph.D. awarding institution/year, complete bibliography, several course titles and other missing details remain marked in the website. The publication list contains two supplied records; a manuscript is not presented as a published article. Syllabus development is separated from courses taught.

To add confirmed profile URLs, replace each pending item in the `academic-profiles` list in `index.html` with a normal link to the exact supplied URL. Publication and course filter values are stored in each record's `data-*` attributes; keep those consistent when editing records.

## Local preview

Open `index.html` in a browser, or run `python -m http.server 8000` inside this folder and visit `http://localhost:8000/`. This command serves the files locally and does not deploy the website.
