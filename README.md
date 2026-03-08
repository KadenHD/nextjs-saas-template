# Next.js SaaS Template

A production-ready SaaS starter kit built with [Next.js](https://nextjs.org/) to help you launch your web application faster. It comes with pre-built authentication, billing, dashboards, and everything you need to start a modern SaaS product.

It also includes a [FastAPI](https://fastapi.tiangolo.com/) backend to securely execute your SaaS business logic and allow access to your product data only if the API key is valid.
> You can replace the backend with whatever suit to you.

## Features

- **🔐 Authentication** - Email/password, OAuth (Google, GitHub), magic links
- **💳 Billing & Subscriptions** - Stripe integration with plans & invoices
- **🗄 Database & ORM** - Pre-configured with Prisma (PostgreSQL)
- **📁 File Storage Management** - Store and authenticated ressources access
- **👤 User Management** - Accounts, profile pages, and roles
- **📊 Admin Dashboard** - Monitor users, subscriptions, and analytics
- **📧 Email System** - Transactional emails & notifications
- **🎨 UI Components** - Pre-designed responsive components and pages
- **🚀 Deployment Ready** - Optimized for Vercel or any Node.js host
- **⚙️ API Routes & Server Actions** - Ready-to-use backend endpoints
- **🧱 Environment Config** - .env template for easy setup

## Getting Started

### 0. Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [GNU Make](https://www.gnu.org/software/make/)
- [Python](https://www.python.org/) 3.12+
- [Node.js](https://nodejs.org/)  22.14+
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 1. Clone the repository

```bash
git clone https://github.com/KadenHD/nextjs-saas-template.git
cd nextjs-saas-template
```

### 2. Install dependencies

#### Backend

Create a Python virtual environment and install dependencies.

```bash
cd backend
python -m venv .venv
source .venv/bin/activate 2>/dev/null || source .venv/Scripts/activate
pip install -r requirements.txt
```

#### Dashboard

Install Node dependencies.

```bash
cd dashboard
npm install
```

### 3. Configure environment

Create your `.env` file from the example template.

```bash
cp .env.example .env
```

Copy it to both services:

```bash
cp .env backend/.env
cp .env dashboard/.env.local
```

### 4. Run the development server

Start required services using Docker.

```bash
docker compose up -d
```

#### Run Backend

```bash
cd backend
source .venv/bin/activate 2>/dev/null || source .venv/Scripts/activate
make dev
```

The API will be available on: <http://localhost:5001>

#### Run Dashboard

```bash
cd dashboard
npm run dev
```

The Dashboard will be available on: <http://localhost:5000>

## Deployment

### Deploy Backend

```bash
cd backend
source .venv/bin/activate 2>/dev/null || source .venv/Scripts/activate
make prod
```

The API will be available on: <http://localhost:5001>

### Deploy Dashboard

```bash
cd dashboard
npm run build
npm run start
```

The Dashboard will be available on: <http://localhost:5000>

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) and [FastAPI](https://fastapi.tiangolo.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) / [ShadCN UI](https://ui.shadcn.com/) (using [Shadcnblocks](https://www.shadcnblocks.com/) & [Radix UI](https://www.radix-ui.com/))
- **Database**: [Prisma](https://www.prisma.io/) + [PostgreSQL](https://www.postgresql.org/) (with [adminer](https://github.com/jeliebig/Adminer-Autologin) local-only supervision)
- **File Storage**: [Openinary](https://openinary.dev/), a self-hostable alternative to [Cloudinary](https://cloudinary.com/)
- **Payments**: [Stripe](https://stripe.com/)
- **Email**: [Nodemailer](https://nodemailer.com/) (with [mailpit](https://mailpit.axllent.org/docs/install/docker/) local-only server and supervision)
- **Authentication**: [Better-Auth](https://better-auth.com/)

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for improvements.

## License

[MIT License © 2026](./LICENSE)
