# Cresify - Multi-Vendor Marketplace & Services Platform

## 📖 Overview

Cresify is a robust full-stack multi-vendor e-commerce and services platform. It empowers users to seamlessly buy products and book services from independent professionals. Simultaneously, it provides sellers and service providers with comprehensive dashboards to manage their offerings, schedules, orders, and earnings.

## 🌟 Key Features

- **Multi-Role System**: Dedicated flows for Customers, Sellers, Service Providers, and Administrators.
- **E-Commerce Marketplace**: Advanced product search, category filtering, multi-vendor shopping cart, wishlists, and rating systems.
- **Service Bookings**: Provider availability calendars, granular time slot generation, and full booking lifecycle management.
- **Real-time Messaging**: Instant communication between buyers and sellers/providers powered by Socket.io.
- **Comprehensive Dashboards**: Role-specific analytics, product/service management, and order tracking.
- **Financial & Payments**: Stripe Connect integration for split payments, wallet tracking, payout requests, and refund resolution workflows.
- **Internationalization (i18n)**: Built-in multi-language support (English and Spanish).

## 💻 Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **State Management**: Redux Toolkit & RTK Query
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io-client

### Backend

- **Runtime**: Node.js & Express
- **Database**: MongoDB & Mongoose
- **Authentication**: JWT & bcrypt
- **Payments**: Stripe API
- **Real-time**: Socket.io

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or Atlas)
- Stripe account (for payments functionality)

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KhalidTheCoder/cresify-ecommerce-multivendor.git
   cd cresify-ecommerce-multivendor
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   npm install
   cp .env.example .env
   ```

   _Edit the `backend/.env` file and fill in your MongoDB URI, Stripe keys, and ImageBB API key._

   ```bash
   npm run dev
   ```

   _The backend will run on http://localhost:5000_

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   ```
   _Edit the `frontend/.env` file with your NextAuth secret and ImageBB API key._
   ```bash
   npm run dev
   ```
   _The frontend will run on http://localhost:3000_

## ⚙️ Environment Variables

### Backend (`backend/.env`)

- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `MONGO_DB_NAME` - Database name (e.g., cresify)
- `FRONTEND_URL` - Allowed CORS origin (e.g., http://localhost:3000)
- `STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_CLIENT_ID` - Stripe configuration
- `IMGBB_API_KEY` - Image upload integration
- `PLATFORM_COMMISSION_PERCENT` - Platform fee cut (default: 10)

### Frontend (`frontend/.env`)

- `NEXTAUTH_URL` - Canonical URL of your site (e.g., http://localhost:3000)
- `NEXTAUTH_SECRET` - Random string used to hash tokens
- `NEXT_PUBLIC_IMGBB_API_KEY` - Client-side image upload key

## 📂 Project Architecture

- `backend/src/config/` - Platform constants and DB setup
- `backend/src/controllers/` - Domain-specific route handlers
- `backend/src/models/` - Mongoose schemas
- `backend/src/middleware/` - Auth guards and error handlers
- `backend/src/routes/` - Express routers
- `frontend/app/` - Next.js 14 file-based routing and layouts
- `frontend/components/` - Reusable UI, providers, and layout components
- `frontend/services/` - RTK Query API endpoints
- `frontend/store/` - Redux state management
