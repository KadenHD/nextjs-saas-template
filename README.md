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

### 1. Clone the repository

```bash
git clone https://github.com/KadenHD/nextjs-saas-template.git
cd nextjs-saas-template
```

### 2. Install dependencies

TODO

### 3. Configure environment

TODO

### 4. Run the development server

TODO

## Deployment

TODO

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) and [FastAPI](https://fastapi.tiangolo.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) / [ShadCN UI](https://ui.shadcn.com/)
- **Database**: [Prisma](https://www.prisma.io/) + [PostgreSQL](https://www.postgresql.org/) (with [adminer](https://github.com/jeliebig/Adminer-Autologin) local-only supervision)
- **File Storage**: [Openinary](https://openinary.dev/), a self-hostable alternative to [Cloudinary](https://cloudinary.com/)
- **Payments**: [Stripe](https://stripe.com/)
- **Email**: [Nodemailer](https://nodemailer.com/) (with [mailpit](https://mailpit.axllent.org/docs/install/docker/) local-only server and supervision)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for improvements.

## License

[MIT License © 2026](./LICENSE)
