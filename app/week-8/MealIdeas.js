"use client";

import { useEffect, useState } from "react";

// Fetch meals from TheMealDB API
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function load() {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }
    load();
  }, [ingredient]);

  // Nothing selected yet
  if (!ingredient) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Meal Ideas (select an item)</h2>
        <p className="text-slate-400">Choose an item to see ideas.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Meal Ideas For "{ingredient}"
      </h2>

      {/* No meals found */}
      {meals.length === 0 && (
        <p className="text-slate-400">No meals found.</p>
      )}

      {/* Meals in rectangles (2 columns) */}
      {meals.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="p-3 rounded-md bg-slate-800 border border-slate-700 
                         hover:bg-slate-700 transition text-slate-100 cursor-pointer"
            >
              {meal.strMeal}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
