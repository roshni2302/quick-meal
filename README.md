# QuickMeal 🍳🥕🍅

A simple and fast **recipe suggestion** application built for **Taylor**, a busy professional who wants to **cook quickly using the ingredients already at home**.

This application lets the user:
- Search recipes by ingredient name
- View meal images and titles instantly
- Open a recipe to view instructions and details
- Use multiple ingredients to narrow results

---

## 🌍 Live Demo

🔗 **https://quick-meal-rose.vercel.app/**

---

## 🧑‍💼 User Persona

| Field | Details |
|------|---------|
| **Name** | Taylor |
| **Occupation** | Busy Professional |
| **Need** | Quickly find meal ideas based on available ingredients |
| **Solution** | A minimal web app that suggests recipes from TheMealDB |

Taylor prefers:
- Quick search results
- Minimal UI
- Simple step-by-step cooking instructions  
This app directly fulfills those needs.

---

## ✨ Features

- ✅ Search recipes using **one or more ingredients**
- ✅ View recipe images in a clean grid layout
- ✅ Click a meal card to open full recipe + instructions
- ✅ Responsive and mobile-friendly layout
- ✅ No account, no setup — just search and cook

---

## 🔗 API Used

This app uses **TheMealDB Public API** *(no API key required)*:

- Search meals by ingredient:  
  `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`

- Fetch recipe details by meal ID:  
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i={idMeal}`

---

## 🧠 Tech Stack

| Area | Technology |
|------|------------|
| Frontend Framework | React + Vite |
| Styling | Tailwind CSS |
| State Management | React useState |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

## 🖥️ How to Run Locally

```bash
git clone https://github.com/roshni2302/quick-meal
cd quick-meal
npm install
npm run dev
