export default function Item({ item, onSelect }) {
  return (
    <li
      className="border border-slate-700 p-4 rounded-lg shadow-sm bg-slate-900 mb-3 cursor-pointer hover:bg-slate-800 transition"
      onClick={() => onSelect(item)}
    >
      <h2 className="font-semibold text-lg text-white">{item.name}</h2>
      <p className="text-sm text-slate-200">Quantity: {item.quantity}</p>
      <p className="text-sm text-slate-300">Category: {item.category}</p>
    </li>
  );
}
