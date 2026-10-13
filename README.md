# Pestana Dev — Portfolio

**English** · [Português](README.pt-BR.md)

Personal portfolio of **Vitor Pestana**, a Back-end & Full Stack developer. Besides presenting my work, the site is a real application: it has authentication, profile management, integrations with public APIs and a real-time Scrum Board, all consuming my own .NET API (**PestanaDevApi**).

🌐 [www.pestanadev.com.br](https://www.pestanadev.com.br)

## Features

- **Home** — presentation, values, skills and projects, with animations and interactive backgrounds.
- **Authentication** — sign up with email confirmation code, login with credentials or with Google, GitHub and LinkedIn, password recovery and Google reCAPTCHA v3.
- **Profile** — view and edit data, change password and delete account.
- **NASA APOD** — NASA's Astronomy Picture of the Day and the pictures of the week.
- **Art Exhibition** — search the Metropolitan Museum of Art collection.
- **Scrum Board** — real-time Kanban board shared with other users (see [below](#scrum-board)).
- **Internationalization** — Portuguese and English on every page.

## Tech stack

| Area | Technologies |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn, Motion |
| Data | TanStack Query, Axios, React Hook Form |
| Authentication | NextAuth (JWT), Google reCAPTCHA v3 |
| Real time | SignalR (`@microsoft/signalr`) |
| UI components | Cult UI Kanban Board, Swiper, React Bits backgrounds |
| i18n | next-intl |
| Tests | Vitest |

## Architecture

```
Component → hook (TanStack Query) → Service → RequestDtoBuilder → /api/proxy (Next.js) → PestanaDevApi
```

- The browser never calls the API directly: every request goes through the **`/api/proxy`** route, which adds the user's JWT (stored by NextAuth) on the server.
- **Services** (`services/`) describe each API call, and **`RequestDtoBuilder`** centralizes paths, path params and query params.
- **Hooks** (`hooks/api/`) wrap the services with TanStack Query, with global error and loading handling.
- API errors start with a 4-character code (e.g. `7E1A`), translated in `i18n/translations`.
- The API's JWT never reaches the browser. The only direct connection is **SignalR**: on every connection, the **`/api/hub-token`** route requests on the server a short-lived token (10 minutes) that only the hub accepts, because it has its own audience and is rejected by every other endpoint.

## Getting started

### Requirements

- Node.js 20+
- [PestanaDevApi](https://github.com/vitorpestana94) running (default: `http://localhost:5024`)

### Installation

```bash
npm install
```

### Environment variables

Create a `.env` file at the project root:

| Variable | Description |
|---|---|
| `API_URL` | PestanaDevApi URL (also used by the browser to connect to SignalR) |
| `NEXTAUTH_URL` | URL of this site (e.g. `http://localhost:3000`) |
| `NEXTAUTH_SECRET` | Secret used to sign the NextAuth JWT |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth credentials |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub OAuth credentials |
| `LINKEDIN_CLIENT_ID` / `LINKEDIN_CLIENT_SECRET` | LinkedIn OAuth credentials |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 site key |

### Running

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Runs the production build |
| `npm run lint` | ESLint |
| `npm test` | Unit tests (Vitest) |

## Scrum Board

A Kanban board where members organize tasks together, updated in real time. Only authenticated users can access it.

### Routes

| Route | Description |
|---|---|
| `/scrum-board` | Opens the last board you displayed (stored in the NextAuth cookie) or your first board |
| `/scrum-board/create` | Board creation, shown when you have no boards |
| `/scrum-board/{id}` | The board itself |

### What you can do

- Create, rename, describe and delete boards (owner).
- Create, edit, move (drag and drop) and delete tasks, with type, owner, description and **deadline**. Overdue tasks are highlighted.
- Rename the 5 columns of the board.
- Invite members by email, remove members or leave a board.

### Real time

The board connects to the `/hubs/board` SignalR hub and updates itself when another member creates, updates, moves or deletes tasks, changes columns, members or the board. Deadline changes show a notification. After a reconnection, the board is reloaded to stay in sync.

> SignalR connects from the browser directly to the API, so **PestanaDevApi must allow this site's origin in its CORS policy**.

### Invitations

When the owner invites an email that isn't registered yet, the API sends an invitation to:

```
/{locale}/authentication/sign-up?redirectTo=scrum-board&boardId={boardId}
```

After signing up (or logging in), the user is redirected to the board, and the invitation is accepted automatically.

## Tests

```bash
npm test
```

Unit tests with Vitest cover the board's logic: deadline dates (UTC), mapping the API data to the Kanban, real-time cache updates, request building and string/error helpers.

## Project structure

```
app/              Routes (App Router) and API routes (proxy, hub-token, NextAuth)
components/       UI components, grouped by type (buttons, drawers, sections, pages…)
components/ui/    Third-party components installed with shadcn (Cult UI Kanban Board)
hooks/            Shared hooks and TanStack Query hooks (hooks/api)
services/         API calls and the RequestDtoBuilder
models/           DTOs, requests, responses and enums
utils/            Authentication, board, dates, errors and proxy helpers
i18n/             next-intl configuration and translations (pt / en)
tests/            Unit tests
```

## Author

**Vitor Luiz Pestana Pereira** — Back-end & Full Stack Developer

[LinkedIn](https://www.linkedin.com/in/vitor-pestana-9ab88b200/) · [GitHub](https://github.com/vitorpestana94) · vitorpestanadev@gmail.com
