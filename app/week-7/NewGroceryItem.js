"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity: Number(quantity),
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      
      {/* Name */}
      <div>
        <label className="block mb-1 text-sm font-medium">Name</label>
        <input
          className="w-full border border-slate-700 bg-slate-800 text-white rounded px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block mb-1 text-sm font-medium">Quantity</label>
        <input
          type="number"
          min="1"
          className="w-full border border-slate-700 bg-slate-800 text-white rounded px-2 py-1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1 text-sm font-medium">Category</label>
        <select
          className="w-full border border-slate-700 bg-slate-800 text-white rounded px-2 py-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </div>

      {/* Submit */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}
