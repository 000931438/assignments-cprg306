export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-slate-700 p-4 rounded-lg shadow-sm bg-slate-900 mb-3">
      <h2 className="font-semibold text-lg text-white">{name}</h2>
      <p className="text-sm text-slate-200">Quantity: {quantity}</p>
      <p className="text-sm text-slate-300">Category: {category}</p>
    </li>
  );
}
