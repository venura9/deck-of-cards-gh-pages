# deck-of-cards-gh-pages

Smart link release page for **Yumeth Athukorala – "Deck of Cards"** (single).

Built with React + TypeScript + Vite, hosted on GitHub Pages at [music.yumeth.com](https://music.yumeth.com), with DNS managed via Cloudflare.

## Architecture

<!-- ARCHITECTURE -->
See full diagram: [docs/diagrams/architecture.md](docs/diagrams/architecture.md)

```mermaid
flowchart TD
    A[Developer<br/>git push to main] --> B[GitHub Actions]
    B --> C[Cloudflare DNS<br/>CNAME upsert]
    B --> D[gh-pages branch]
    C --> E[GitHub Pages]
    D --> E
    E --> F[music.yumeth.com]
```
<!-- /ARCHITECTURE -->

## Required GitHub Actions secrets

| Secret | Purpose |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with DNS edit permission |
| `CLOUDFLARE_ZONE_ID` | Cloudflare Zone ID for your domain |
| `GH_TOKEN` | GitHub personal access token for Pages deployment |

## GitHub Pages settings

- **Source:** `gh-pages` branch
- **Custom domain:** `music.yumeth.com`
- **Enforce HTTPS:** ✅
