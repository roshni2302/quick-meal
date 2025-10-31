import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MealGrid from "./components/MealGrid";
import { searchByIngredient, getMealDetails } from "./utils/api";

export default function App() {
  const [meals, setMeals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  async function handleSearch(q) {
    setLoading(true);
    setError(null);
    setMeals(null);

    const ingredients = q.split(",").map(i => i.trim()).filter(i => i.length > 0);

    try {
      // Fetch results for each ingredient separately
      const results = await Promise.all(
        ingredients.map((ingredient) => searchByIngredient(ingredient))
      );

      // Convert to arrays (some may be null if no results)
      const mealLists = results.map(r => r.meals || []);

      // If no results at all:
      if (mealLists.some(list => list.length === 0)) {
        setMeals([]);
        return;
      }

      // Intersect by meal ID — only keep meals that appear in EVERY list
      const intersection = mealLists.reduce((acc, list) => {
        return acc.filter(meal =>
          list.some(m => m.idMeal === meal.idMeal)
        );
      });

      setMeals(intersection);

    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }


  async function handleSelect(meal) {
    // optional: fetch detailed info
    setDetailsLoading(true);
    try {
      const d = await getMealDetails(meal.idMeal);
      setSelectedMeal(d.meals ? d.meals[0] : null);
    } catch (err) {
      console.error(err);
    } finally {
      setDetailsLoading(false);
    }
  }

  function closeModal() {
    setSelectedMeal(null);
  }

  return (
    <div className="min-h-screen">
      <header className="py-8">
        <h1 className="text-3xl text-center font-bold">QuickMeal</h1>
        <p className="text-center text-slate-600 mt-2">Find recipes by ingredient — fast.</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      <main className="max-w-6xl mx-auto">
        {loading && <p className="text-center">Searching...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && meals && meals.length > 0 && (
          <MealGrid meals={meals} onSelect={handleSelect} />
        )}

        {!loading && meals === null && (
          <p className="text-center text-slate-600 mt-8">
            Try searching for an ingredient to see recipe ideas.
          </p>
        )}

        {!loading && meals && meals.length === 0 && (
          <p className="text-center text-slate-600 mt-8">No recipes found for this ingredient.</p>
        )}
      </main>

      {/* simple details modal */}
      {selectedMeal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">{selectedMeal.strMeal}</h2>
              <button onClick={closeModal} className="text-slate-500">Close</button>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-64 object-cover rounded" />
              <div>
                <h3 className="font-semibold">Category</h3>
                <p className="mb-2">{selectedMeal.strCategory} • {selectedMeal.strArea}</p>

                <h3 className="font-semibold">Instructions</h3>
                <p className="text-sm whitespace-pre-line">{selectedMeal.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
