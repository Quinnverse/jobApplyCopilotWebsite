# Marketing Site Freeze

- Release source commit: `df55d9718976f60b5ecb1f65aaedd938e821ca03`
- Repository: `Quinnverse/jobApplyCopilotWebsite`
- Branch: `main`
- Build environment: GitHub Actions `ubuntu-latest`, Node.js 22, npm clean install
- CI runs: `37054336731` and `37054564348` — successful

## Verified checks

- `npm ci`
- `npm run test` (4 release-content checks)
- `npm run lint`
- `npm run build`
- Static routes: `/privacy/`, `/terms/`, and `/help/`
- Open Web App: `https://jobs.quinnverse.tech`
- Extension surface: public download is intentionally unavailable; it is labeled beta and does not simulate a ZIP download.

## Claim boundaries

- ATS adapters for Greenhouse, Lever, and Ashby are implemented; real-world compatibility is being verified progressively.
- Reminders are workspace records, not push, email, or scheduled notifications.
- Public self-service export and account deletion are not claimed as available.
- The product never submits applications automatically.

## Remaining limitations and decisions

- A verified public extension artifact is not available yet.
- `LICENSE DECISION REQUIRED`: no license has been chosen or added.
- Deployment has not been performed or authorized.

## Status

`MARKETING SITE RELEASE GATE: PASS`

`MARKETING SITE: FROZEN / NOT DEPLOYED`
