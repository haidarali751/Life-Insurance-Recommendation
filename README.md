# Life Insurance Recommendation MVP

This monorepo contains a full-stack MVP for life insurance recommendations, built with Next.js (frontend), Express (backend), PostgreSQL, Knex/Objection ORM, and Docker. It is AWS-ready and follows strict MVC and security best practices.

## Monorepo Structure

- `frontend/` – Next.js + React + Tailwind CSS (TypeScript)
- `backend/` – Express + TypeScript + Knex/Objection ORM (MVC)
- `docker compose.yml` – Orchestrates frontend, backend, and PostgreSQL

## Local Development & Docker Workflow

### Prerequisites

- Docker & Docker Compose installed

### Steps

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. **Build and start all services:**
   ```bash
   docker compose up --build
   ```
3. **Run database migrations (required!):**
   After containers are up, run:
   ```bash
   docker compose exec backend npm run migrate:up
   ```
   This will create the required tables in the PostgreSQL database.
4. **Access the app:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

### Useful Docker Commands

- Stop and remove all containers/volumes:
  ```bash
  docker compose down -v
  ```
- Rebuild everything from scratch:
  ```bash
  docker compose build --no-cache
  docker compose up
  ```

## Environment Variables

- Frontend: `frontend/.env.local` (set API base URL)
- Backend: `backend/.env` (CORS origins, DB config)
- All sensitive config is managed via Docker Compose for local dev.

## Production Deployment

### Live URLs

- **Frontend (Vercel):** [https://life-insurance-recommendation.vercel.app/](https://life-insurance-recommendation.vercel.app/)
- **Backend (Render):** [https://life-insurance-recommendation.onrender.com](https://life-insurance-recommendation.onrender.com)
- **Database (NeonDB):** Hosted PostgreSQL (connection string managed securely)

### How it works

- The frontend is deployed on Vercel for fast, global delivery and serverless scaling.
- The backend is deployed on Render for managed Node.js hosting and API endpoints.
- The PostgreSQL database is hosted on NeonDB for cloud-native, scalable storage.
- Environment variables for API URLs and DB connection are set in Vercel/Render dashboards.

### AWS Deployment (Optional)

#### ECS (Recommended)

1. Build and push Docker images to Amazon ECR.
2. Create ECS services for frontend, backend, and PostgreSQL.
3. Set environment variables for backend (DB connection, CORS, etc).
4. Use an Application Load Balancer for routing.

#### Elastic Beanstalk

1. Create separate environments for frontend and backend using Docker platform.
2. Use AWS RDS for PostgreSQL and configure backend environment variables accordingly.

### Security & Production Notes

- Use HTTPS for all production deployments.
- Store secrets (DB password, etc.) in Vercel/Render/AWS Secrets Manager or SSM Parameter Store.
- Restrict security groups to allow only necessary traffic.

## Features & Architecture

- Responsive UI, clean state management (frontend)
- Secure, validated API (backend)
- Knex/Objection ORM, strict MVC
- Dockerized local dev & AWS-ready
- Extensible backend logic
- Clear code organization

## Troubleshooting

- If you see `relation "submissions" does not exist`, make sure to run migrations:
  ```bash
  docker compose exec backend npm run migrate:up
  ```
- For port conflicts, change the exposed ports in `docker compose.yml`.
- For database errors, check logs with:
  ```bash
  docker compose logs postgres
  ```

---

For any issues, please check the logs and ensure all steps above are followed.
