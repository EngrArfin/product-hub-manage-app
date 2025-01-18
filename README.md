# Product Hub Manager Online

A full-stack admin dashboard application built with Next.js and NextUI, designed to manage products, featuring authentication, CRUD operations, and various product management functionalities.

## Features

- **Authentication System**

  - Login
  - Registration
  - Forgot Password
  - Reset Password

- **Product Management**

  - Product List Table with:
    - Filtering by Name and Price
    - Pagination
    - Optimized Search
  - CRUD functionality for products
    - Includes uploading product photos (thumbnail and cover) to the backend and returning URLs.
    - Toast notifications for actions (e.g., product added, updated, or deleted).

- **Product Model**
  - title
  - photo (thumbnail, cover)
  - quantity
  - price
  - stock
  - discount (optional)

## Tech Stack

- **Frontend**

  - Next.js (React framework)
  - NextUI (UI component library)
  - React-Redux Toolkit
  - RTK Query for data fetching
  - Tailwind CSS for additional styling
  - Authentication using Next.js custom auth

- **Backend**
  - Node.js
  - Express.js
  - Prisma ORM with PostgreSQL
  - MVC (Model-View-Controller) architecture for API

## Installation

### Prerequisites

- Node.js
- PostgreSQL
- Vercel CLI (for deployment)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/EngrArfin/product-hub-manage-app
cd product-hub-manage-app
```
