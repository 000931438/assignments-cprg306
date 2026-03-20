"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import itemsData from "./Groceryitems.json";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  // If user is NOT logged in → redirect to Week‑9 landing page
  if (!user) {
    router.push("/week-9");
    return null;
  }

  // Week‑8 logic stays the same
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleItemSelect(item) {
    let name = item.name;

    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
      ""
    );

    name = name.split(",")[0].trim();
    setSelectedItemName(name);
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8 max-w-5xl mx-auto">

      {/* TOP BAR */}
      <div className="flex justify-between mb-10">
        <Link
          href="/week-9"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md 
                     text-sm font-medium hover:bg-slate-700 transition"
        >
          ← Back
        </Link>

        <button
          onClick={firebaseSignOut}
          className="px-3 py-1.5 bg-red-600 rounded-md text-sm font-medium hover:bg-red-500 transition"
        >
          Log Out
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex gap-8">

        {/* LEFT SIDE */}
        <div className="w-1/2">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full mb-8">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>

      </div>
    </main>
  );
}
