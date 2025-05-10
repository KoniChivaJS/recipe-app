# Recipe App – Test Assessment

This project is a full-stack application that allows users to browse and view recipes using a public API. It includes a **Frontend** built with **Next.js** and a **Backend** built with **Express.js**.

## Tech Stack

### Frontend (FE)

- Next.js
- React
- TypeScript
- Axios
- TailWind

### Backend (BE)

- Node.js
- Express.js
- TypeScript
- Axios 

## Folder Structure

```
root/
├── backend/       # Express backend
└── recipe-book-fe/      # Next.js frontend
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KoniChivaJS/recipe-app.git
cd recipe-app
```

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

---

## Environment Variables

Create a `.env` file in the `backend/` folder and add:

```
PORT=5000
RECIPE_API_BASE_URL=https://www.themealdb.com/api/json/v1/1
```

---

## Running the App

### Backend

```bash
cd backend
npm run dev
```

Server will run on `http://localhost:5000`.

### Frontend

```bash
cd frontend
npm run dev
```

App will be available at `http://localhost:3000`.

---

## Features

### Backend

- `GET /recipes`  
  Fetch all recipes or filter by ingredient, country, or category.

- `GET /recipes/:id`  
  Fetch detailed recipe information by ID.

### Frontend

- **Recipe List Page**

  - View all recipes or filter them by country, category, or ingredient.
  - Each recipe item links to a detailed page.

- **Recipe Info Page**
  - View recipe image, name, country, instructions, ingredients.
  - Country and ingredients are clickable to filter recipes.
  - Sidebar with related category recipes.

---

## Code Quality

- ESLint and Prettier are set up for both frontend and backend.
- Run formatting:

```bash
npm run lint
```

---

## Notes

- The app uses the MealDB API to fetch recipes and related data.
- No database is used—data is pulled live from the API.
- The UI is responsive and user-friendly.

---

## Scripts

#### Backend `package.json`

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
},
```

#### Frontend `package.json`

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```
