# AH User Categories API

A RESTful API for managing Albert Heijn category managers and their assigned categories, built with Nest.js, Prisma, and PostgreSQL.

## Features

- Create a user with assigned categories
- Fetch a user with their categories
- Input validation & error handling
- PostgreSQL database integration
- Automated testing

## Table of Contents
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Deployment](#deployment)
- [Technologies](#technologies)

## Setup

### Prerequisites
- Node.js v18+
- PostgreSQL
- Git

### Installation

**1. Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ah-user-categories-api.git
   cd ah-user-categories-api
  ```
**2. Install dependencies:**

npm install

**3. Create .env file:**

DATABASE_URL="postgresql://postgres:your_password@localhost:5432/ah-users?schema=public"

**4. Run database migrations:**

npx prisma migrate dev

**5. Start the development server:**

npm run start:dev

### API Endpoints
**Create User**
```
POST /users
```

**Request:**

json
```
{
  "email": "category.manager@ah.nl",
  "categories": [8, 63, 89]
}
```
**Response:**
```
{
  "id": 1,
  "email": "category.manager@ah.nl",
  "categories": [8, 63, 89],
  "createdAt": "2025-01-31T12:34:56.789Z",
  "updatedAt": "2025-01-31T12:34:56.789Z"
}
```
**Get User**
```
GET /users/{id}
```

**Response:**
```
{
  "id": 1,
  "email": "category.manager@ah.nl",
  "categories": [8, 63, 89],
  "createdAt": "2025-01-31T12:34:56.789Z",
  "updatedAt": "2025-01-31T12:34:56.789Z"
}
```
**Database Schema**

prisma

```
model User {
  id         Int      @id @default(autoincrement())
  email      String   @unique
  categories Int[]
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```
### Testing

Run the test suite:
```
npm run test
```
### Deployment
Create a production build:
```
npm run build
```
Start the production server:
```
npm run start:prod
```
### Technologies
**Framework**: Nest.js

**Database**: PostgreSQL

**ORM**: Prisma

**Validation**: class-validator

**Testing**: Jest

**Environment**: Node.js
