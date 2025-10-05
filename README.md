# ApiNest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Go](https://img.shields.io/badge/Go-1.24-blue.svg?logo=go&logoColor=white)](https://go.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-green.svg?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

ApiNest is an open-source platform that transforms your JSON data into instant REST APIs. Simply upload your JSON data and get fully functional endpoints with automatic CRUD operations, documentation, and zero configuration. Perfect for rapid prototyping, lightweight data storage, or creating APIs from existing JSON files without the overhead of a full database setup.

## ✨ Features

- **JSON to API**: Upload your JSON data and instantly get REST endpoints with full CRUD operations
- **Zero Configuration**: No setup required - just paste your JSON and start using the API
- **Auto Documentation**: Beautiful Swagger-style API docs generated automatically
- **Custom Endpoints**: Get unique URLs like `/api/users` and `/api/products` automatically generated from your data
- **User-Namespaced Paths**: Buckets are organized under usernames for easy collaboration and access control
- **Authentication**: Built-in API key or session-based auth for secure access
- **Interactive Dashboard**: Intuitive web interface built with Next.js for managing your JSON buckets
- **Scalable Backend**: Go-based API server with PostgreSQL for reliable persistence
- **Monorepo Setup**: Single repository for frontend and backend, with easy local development

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

## 🔧 Development Setup

### Migration tool & Swagger Setup

- Install goose from here: [Goose](https://block.github.io/goose/docs/getting-started/installation/)
- Install swaggo from here: [Swaggo](https://github.com/swaggo/swag)

### Linting & Pre-commit Setup

To ensure code quality and consistency, set up linting and pre-commit hooks:

1. **Install pre-commit**:

   ```bash
   pip install pre-commit
   ```

2. **Install Go linting tools**:

   ```bash
   # Install golangci-lint
   curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/HEAD/install.sh | sh -s -- -b $(go env GOPATH)/bin v2.4.0

   # Install goimports for Go code formatting
   go install golang.org/x/tools/cmd/goimports@latest
   ```

3. **Set up pre-commit hooks**:

   ```bash
   pre-commit install
   ```

4. **Run linting manually** (if needed):

   ```bash
   # Frontend linting
   pnpm --filter=frontend lint

   # Backend linting
   cd backend && pnpm lint
   ```

The pre-commit hooks will automatically run linting and formatting checks before each commit, ensuring code quality and consistency across the project.

### Development Workflow

1. **Make changes** to your code
2. **Stage your changes**: `git add .`
3. **Commit**: `git commit -m "your message"` - pre-commit hooks will run automatically
4. **If hooks fail**: Fix the issues and commit again
5. **Push**: `git push` when all checks pass

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

# Run migrations
npm run migration:up

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
2. **Upload JSON Data**: Paste your JSON data into a new bucket via the dashboard or API. For example:
   ```json
   {
     "users": [
       { "id": 1, "name": "John Doe", "email": "john@example.com" },
       { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
     ]
   }
   ```
3. **Get Instant API**: Your JSON data becomes a fully functional REST API:
   - `GET /{username}/users` – Retrieve all users
   - `GET /{username}/users/1` – Get specific user
   - `POST /{username}/users` – Add new user
   - `PUT /{username}/users/1` – Update user
   - `DELETE /{username}/users/1` – Delete user
4. **Auto Documentation**: Visit the generated Swagger docs to test your endpoints
5. **Share & Collaborate**: Public buckets are readable by anyone; private ones require auth

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using Next.js, Go, and PostgreSQL.

---

⭐ Star this repo if you find it useful! Questions? Open an [issue](https://github.com/nabinkawan/apinest/issues).
