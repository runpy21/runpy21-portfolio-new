# Portfolio setup and publishing guide

## Single source of portfolio content

Edit [`src/data/portfolio.ts`](./src/data/portfolio.ts) to change the portfolio. Presentation components read from the exported `portfolio` object; avoid copying personal details into component files.

### Profile and metadata

The `profile` object contains your name, title, initials, short biography, career goal, and optional contact details:

- `email`: optional. Leave `null` until you want to publish a real address.
- `githubUrl`: currently set to the GitHub URL you provided.
- `linkedinUrl`: optional and currently `null`.
- `location`: optional and currently `null`.
- `cvPath`: optional and currently `null`; no CV download is shown.

The `seo` object supplies the page title, meta description, and social sharing metadata. Update it if you change the public name, title, or summary. `index.html` contains matching initial metadata for the pre-rendered/loading state.

The `copy` object controls hero and section headings, biography text, and contact/section descriptions.

## Skills and technology verification

The `skills` array is a focused selection from the technologies and practices you supplied, grouped by area. It is not an exhaustive inventory of every item in that list. Review each entry and remove anything you have not used or are not ready to discuss. The section does not assign proficiency ratings.

Full Stack Open participation is listed as education context; completion and certification status were not provided.

Each skill group has a `category` and a `skills` array. Remove a skill or group by editing the configuration. Empty skill arrays are omitted from the site.

## Education and work experience

`education` contains the institutions and dates provided:

- Full Stack Open, University of Helsinki — 2026
- Khmelnytskyi National University — 2021–2024
- Khmelnytskyi Polytechnic College — 2017–2021

No degree, major, grade, certification, or completion status has been added where it was not supplied. Optional `qualification` and `details` can be added when you have accurate information.

`experience` is an empty array because no employment history was provided. Add accurate work, internship, freelance, or open-source entries to show the Experience section. The section and its navigation link stay hidden while the array is empty.

## Projects

The current `projects` array contains only **Job Tracker**, marked **In development**. Its description stays general because its implementation was not present in the portfolio repository. Technologies, screenshots, features, technical challenges, repository URL, and live-demo URL are intentionally unset.

Add more objects to `projects`; cards are rendered from data. Optional fields:

- `description` and `details`: concise summary and any verified implementation details.
- `status`: for example, `In development` or `Live`, when accurate.
- `technologies`: add only the tools actually used in that project.
- `screenshot`: add `{ src: '/projects/job-tracker.webp', alt: 'Accurate description of the screenshot' }` after placing an optimized image in `public/projects/`. Local root-relative paths are accepted. Missing or invalid image paths use a neutral placeholder; image-load failures fall back to it.
- `githubUrl` and `liveUrl`: supply valid `https://` or `http://` destinations. Invalid protocols and malformed URLs are not rendered as links.
- `highlights` and `challenges`: optional arrays of verified features or technical challenges and solutions.

If an optional field is absent, `null`, or empty, its UI is omitted. Empty project arrays hide the project section.

## Contact links and CV

Only set `email`, `githubUrl`, or `linkedinUrl` when you want that destination public. Email values are validated before creating `mailto:` links; external links allow HTTP(S) only and open safely in a new tab.

To add a CV:

1. Place the file in `public/`, such as `public/oleksandr-dmytruk-cv.pdf`.
2. Set `profile.cvPath` to `/oleksandr-dmytruk-cv.pdf`.

Leave `cvPath: null` if you do not have a CV ready. CV actions accept only local root-relative paths.

The contact form currently performs browser-side validation only. It does not transmit or store form data; connect a backend or form service before describing it as a message-sending form.

## Running and verification

```sh
npm install
npm run dev
npm run lint
npm run build
```

## Pre-publication checklist

- [ ] Confirm the displayed name and professional title.
- [ ] Review and personalize the short biography, career goal, and section copy.
- [ ] Verify every listed technology reflects your actual experience.
- [ ] Confirm education institution names and dates; add qualification details only when accurate.
- [ ] Add real Job Tracker details as they become known; do not imply features that are not implemented.
- [ ] Add genuine project screenshots with descriptive alt text.
- [ ] Verify each repository and live-demo URL.
- [ ] Add LinkedIn and email only if you choose to publish valid links.
- [ ] Add a CV only when it is available.
- [ ] Keep experience empty until you are ready to add real experience.
- [ ] Remove or rewrite any setup-only notes before using the portfolio data for a production release.
- [ ] Test mobile and desktop layouts, links, keyboard navigation, and reduced-motion behavior.
- [ ] Verify metadata and run the production build and available lint checks.
