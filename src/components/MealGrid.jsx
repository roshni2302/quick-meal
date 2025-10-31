import React from "react";
import MealCard from "./MealCard";

export default function MealGrid({ meals, onSelect }) {
    if (!meals) {
        return <p className="text-center text-slate-600 mt-8">No recipes found.</p>;
    }
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {meals.map((m) => (
                <MealCard key={m.idMeal} meal={m} onClick={onSelect} />
            ))}
        </div>
    );
}
