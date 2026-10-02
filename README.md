# Job Application Copilot website

Marketing site for Quinnverse's Job Application Copilot. It describes a deterministic, human-controlled workflow: save opportunities, organize applications and profiles, review safe autofill, and submit applications yourself.

The production Web Workspace is https://jobs.quinnverse.tech.

## Local development

Requires a supported Node.js LTS release and npm.

```bash
npm ci
npm run dev
npm run lint
npm run test
npm run build
npm run preview
```

The site has no required environment variables and does not use Gemini or a server-side AI API.

## Project structure

- `src/` — React marketing site and static document content
- `privacy/`, `terms/`, `help/` — directly addressable static page entries
- `tests/` — release-content regression checks
- `.github/workflows/` — reproducible-build validation

## Content rule

Marketing copy must distinguish verified product behavior from demos, beta access, and in-progress compatibility work. The site must never promise automatic submission, an unavailable extension download, unverified ATS compatibility, or unimplemented data rights.

## Deployment

Publish the complete `dist/` directory to a static host. The build emits `/privacy/`, `/terms/`, and `/help/` as static pages, so no SPA fallback is required for those URLs.

## License

No license has been selected. The repository remains copyrighted by default until the owner makes an explicit license decision.
