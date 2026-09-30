# Vibhum Sharma: Portfolio

Personal portfolio of Vibhum Sharma, Ph.D. research scholar at IIIT Allahabad (multimodal disease prognosis).

**Live:** https://vibhumsharma.vercel.app

## Stack

React 19 · Vite · plain CSS (no UI framework) · react-icons · deployed on Vercel

## Updating content

Everything on the page (profile, research, experience, projects, certificates, skills, links) lives in [`src/data.js`](src/data.js). Edit that file; no component changes are needed for routine updates.

- **Certificates** link to files in Google Drive. Keep the folder shared as "Anyone with the link can view".
- **Resume** is served from `public/resume.pdf`. Replace the file to update it.
- **Theme:** light/dark toggle; follows the system setting by default and remembers the choice.

## Development

```bash
npm install
npm run dev      # local dev server
npm run lint
npm run build    # production build to dist/
```

Pushing to `main` deploys automatically through Vercel.
