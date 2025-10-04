# ApiNest Monorepo

ApiNest allows users to create JSON buckets that are accessible via unique API endpoints.

## Live Demo

Check out the live demo: [https://example.com](https://example.com)

---

## Repository Structure

- `frontend/` - Next.js app (landing page + dashboard)
- `backend/` - Go backend with PostgreSQL
- `README.md` - This file

---

## Frontend

### Setup

```bash
cd frontend
cp .env.sample .env   # configure API URL and other env variables
pnpm install
pnpm run dev
```

- Runs Next.js on http://localhost:3000
- Connects to backend API at the URL defined in .env
