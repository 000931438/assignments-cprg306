import Item from "./Item";

export default function ItemList({ items }) {
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  return (
    <div className="mt-4 space-y-10">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4 capitalize text-white">
            {category}
          </h2>

          <ul className="space-y-4">
            {grouped[category].map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
