import React from "react";

export default function MealCard({ meal, onClick }) {
    return (
        <div
            role="button"
            onClick={() => onClick && onClick(meal)}
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
        >
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-44 object-cover"
                loading="lazy"
            />
            <div className="p-3">
                <h3 className="text-sm font-semibold">{meal.strMeal}</h3>
                <p className="text-xs text-slate-500 mt-1">{meal.idMeal}</p>
            </div>
        </div>
    );
}
