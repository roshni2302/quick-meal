

# 🍳 QuickMeal — Recipe Finder for Busy People

**QuickMeal** is a simple and fast recipe finder designed for **Taylor**, a busy professional who wants to cook something easy when he gets home.
Taylor can enter **any ingredient** he has — and the app instantly shows a list of meals he can cook using that ingredient.

---

## 🌐 Live Demo

**[https://quick-meal-rose.vercel.app/](https://quick-meal-rose.vercel.app/)**

---

## 📌 Submission Links

| Requirement                   | Link                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| Level 1 — ChatGPT Work        | *(Insert ChatGPT conversation link here)*                                            |
| Level 2 — Working Application | [https://quick-meal-rose.vercel.app/](https://quick-meal-rose.vercel.app/)           |
| Level 3 — Code Repository     | [https://github.com/roshni2302/quick-meal](https://github.com/roshni2302/quick-meal) |

---

## 👤 User Persona

**Name:** Taylor
**Role:** Busy Professional
**Goal:** Cook quickly based on available ingredients
**Needs:** Simple, fast, minimal steps

---

## ✨ Features

* Search meals by **ingredient**
* Fetches recipes from **TheMealDB** public API
* Clean and responsive UI
* No login or setup needed — **just search and cook**

---

## 🧠 API Used

**TheMealDB Filter by Ingredient API**

```
https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
```

---

## 🛠️ Tech Stack

| Component        | Technology     |
| ---------------- | -------------- |
| Framework        | React          |
| Styling          | Tailwind CSS   |
| Hosting          | Vercel         |
| State Management | React useState |

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/roshni2302/quick-meal.git

# Go into project folder
cd quick-meal

# Install dependencies
npm install

# Start the server
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 📂 Project Structure

```
quick-meal/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   └── MealCard.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

---

## 🙌 Acknowledgements

* Recipes provided by **TheMealDB API**
* Built for learning & demonstrating **React + API Integration**

---


Just tell me: **Yes** 😄
