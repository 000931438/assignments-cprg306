export default function GroceryItemList() {
  const items = [
    { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
    { name: "bread 🍞", quantity: 2, category: "bakery" },
    { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
    { name: "bananas 🍌", quantity: 6, category: "produce" },
  ];

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-slate-700 bg-slate-900 p-5 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-semibold text-white">{item.name}</h2>
          <p className="text-slate-200">Quantity: {item.quantity}</p>
          <p className="text-slate-300">Category: {item.category}</p>
        </div>
      ))}
    </div>
  );
}
