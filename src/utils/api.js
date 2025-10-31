const BASE = "https://www.themealdb.com/api/json/v1/1";

export async function searchByIngredient(ingredient) {
    const q = encodeURIComponent(ingredient.trim());
    const res = await fetch(`${BASE}/filter.php?i=${q}`);
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json(); // { meals: [...] } or { meals: null }
}

export async function getMealDetails(id) {
    const res = await fetch(`${BASE}/lookup.php?i=${id}`);
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
}
