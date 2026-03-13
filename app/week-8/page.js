"use client";

import Link from "next/link";
import { useState } from "react";
import itemsData from "./Groceryitems.json";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleItemSelect(item) {
    let name = item.name;

    // Remove emojis
    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
      ""
    );

    // Remove quantity after comma
    name = name.split(",")[0].trim();

    setSelectedItemName(name);
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8 max-w-5xl mx-auto">

      {/* Navigation Buttons */}
      <div className="flex justify-between mb-10">
        <Link
          href="/week-6"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md 
                     text-sm font-medium hover:bg-slate-700 transition"
        >
          ← Previous
        </Link>

        <Link
          href="/"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md 
                     text-sm font-medium hover:bg-slate-700 transition"
        >
          Home
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List + Meal Ideas
      </h1>

      {/* Two-column layout */}
      <div className="flex gap-8">

        {/* LEFT SIDE: Add Item + List */}
        <div className="w-1/2">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full mb-8">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        {/* RIGHT SIDE: Meal Ideas */}
        <div className="w-1/2">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>

      </div>
    </main>
  );
}
