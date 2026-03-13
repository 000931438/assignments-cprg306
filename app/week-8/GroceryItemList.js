"use client";

import { useState } from "react";
import Item from "./GroceryItem";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a copy so we never mutate props
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "quantity") {
    sortedItems.sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <div>
      {/* Sort Dropdown */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select
          className="border p-1 bg-slate-800 text-white border-slate-700 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>

      {/* Render Items */}
      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onSelect={onItemSelect}   // ← NEW for Week 8
          />
        ))}
      </ul>
    </div>
  );
}
