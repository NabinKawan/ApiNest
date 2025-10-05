# ApiNest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Go](https://img.shields.io/badge/Go-1.24-blue.svg?logo=go&logoColor=white)](https://go.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-green.svg?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

ApiNest is an open-source platform that allows users to create secure JSON buckets, each accessible via simple, human-readable API endpoints. Perfect for lightweight data storage, prototyping APIs, or managing configuration files without the overhead of a full database.

## ✨ Features

- **JSON Buckets**: Store and retrieve JSON data via intuitive RESTful endpoints.
- **Simple Endpoints**: Each bucket gets a dedicated, shareable URL in the format `https://apinest.kawannabin.com.np/{username}/{bucket}` (e.g., `https://apinest.kawannabin.com.np/nabin/projects`).
- **User-Namespaced Paths**: Buckets are organized under usernames for easy collaboration and access control.
- **Authentication**: Built-in API key or session-based auth for secure access.
- **Dashboard**: Intuitive web interface built with Next.js for managing buckets and users.
- **Scalable Backend**: Go-based API server with PostgreSQL for reliable persistence.
- **Monorepo Setup**: Single repository for frontend and backend, with easy local development.

## 🚀 Website

Visit the ApiNest website: [https://apinest.kawannabin.com.np](https://apinest.kawannabin.com.np)

## 📁 Repository Structure

```
.
├── frontend/              # Next.js app (landing page + dashboard)
├── backend/               # Go backend with PostgreSQL integration
├── package.json           # Monorepo configuration and scripts
├── pnpm-lock.yaml         # pnpm lockfile for dependencies
├── pnpm-workspace.yaml    # pnpm workspace definition
├── README.md              # This file
├── LICENSE                # MIT Non-Commercial License
└── .gitignore             # Git ignore rules
```

## 🛠️ Quick Start

ApiNest is a monorepo using pnpm workspaces. Ensure you have [Node.js](https://nodejs.org/) (v18+), [pnpm](https://pnpm.io/) (v8+), [Go](https://go.dev/) (v1.21+), and [PostgreSQL](https://www.postgresql.org/) installed. Use Docker for easy database setup (optional but recommended).

### Prerequisites

1. Clone the repository:

   ```bash
   git clone https://github.com/nabinkawan/apinest.git
   cd apinest
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up the database:

   - Create a PostgreSQL database named `apinest`.
   - Or use Docker:
     ```bash
     docker run --name apinest-db -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres:15
     ```

4. Copy environment files:
   ```bash
   cp frontend/.env.sample frontend/.env
   cp backend/.env.sample backend/.env
   ```
   - In `frontend/.env`: Set `NEXT_PUBLIC_API_URL=http://localhost:8080` and `NEXT_PUBLIC_APP_URL=http://localhost:3000`.
   - In `backend/.env`: Set `DATABASE_URL=postgres://user:pass@localhost:5432/apinest`, `JWT_SECRET=your-secret-key`, and `APP_DOMAIN=apinest.com` (for production URL generation).

### Backend Setup

```bash
cd backend
go mod tidy
go run main.go
```

- Runs the Go server on `http://localhost:8080`.
- Supports path-based routing for endpoints like `/nabin/projects`.

### Frontend Setup

```bash
pnpm --filter=frontend dev
```

- Runs Next.js on `http://localhost:3000`.
- Connects to the backend at the URL defined in `.env`.

### Full Stack Development

Run backend in one terminal and frontend in another:

```bash
# Terminal 1: Backend
cd backend && go run main.go

# Terminal 2: Frontend
pnpm --filter=frontend dev
```

Or use monorepo scripts for frontend-focused tasks:

```bash
pnpm dev  # Starts frontend dev server
pnpm build  # Builds frontend
```

Access the dashboard at `http://localhost:3000` to sign up, create a bucket under your username, and test simple access (e.g., `curl http://localhost:8080/yourusername/my-bucket`).

## 📖 Usage

1. **Sign Up/Login**: Create an account via the dashboard to get your `{username}`.
2. **Create a Bucket**: Via dashboard or API (`POST /buckets` with `{ "name": "projects" }` payload). It will be accessible at `https://apinest.com/{username}/projects`.
3. **Access Data**: Use the endpoint for CRUD:
   - `GET /nabin/projects` – Retrieve JSON data.
   - `POST /nabin/projects` – Update with new JSON payload.
   - Include `Authorization: Bearer {api-key}` header for private buckets.
4. **Share & Collaborate**: Public buckets are readable by anyone; private ones require auth.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using Next.js, Go, and PostgreSQL.

---

⭐ Star this repo if you find it useful! Questions? Open an [issue](https://github.com/nabinkawan/apinest/issues).
