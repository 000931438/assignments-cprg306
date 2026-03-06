import Item from "./item";
import items from "./items.json";

export default function ItemList() {
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
          
          {/* Category Title */}
          <h2 className="text-2xl font-bold mb-4 capitalize text-white">
            {category}
          </h2>

          {/* Items */}
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
