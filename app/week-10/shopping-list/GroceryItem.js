export default function Item({ item, onSelect, onDelete }) {
  return (
    <li
      className="border border-slate-700 p-4 rounded-lg shadow-sm bg-slate-900 mb-3 cursor-pointer hover:bg-slate-800 transition flex justify-between items-center"
      onClick={() => onSelect(item)}
    >
      <div>
        <h2 className="font-semibold text-lg text-white">{item.name}</h2>
        <p className="text-sm text-slate-200">Quantity: {item.quantity}</p>
        <p className="text-sm text-slate-300">Category: {item.category}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents selecting item when deleting
          onDelete(item.id);
        }}
        className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
      >
        Delete
      </button>
    </li>
  );
}
