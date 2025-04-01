import React, { useState } from 'react';

const clothingOptions = [
  {
    id: 'jacket',
    name: 'Denim Jacket',
    image: '/tryon/denim-jacket.jpg',
  },
  {
    id: 'dress',
    name: 'Summer Dress',
    image: '/tryon/summer-dress.jpg',
  },
  {
    id: 'hoodie',
    name: 'Eco Hoodie',
    image: '/tryon/eco-hoodie.jpg',
  },
];

function TryOnMock() {
  const [equippedItems, setEquippedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setEquippedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-full p-8 gap-6 max-w-7xl mx-auto">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Try On Clothes</h2>
        <div className="space-y-4">
          {clothingOptions.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`w-full px-4 py-2 rounded-lg border text-left transition ${
                equippedItems.includes(item.id)
                  ? 'bg-green-600 text-white border-green-700'
                  : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Try-On Display */}
      <div className="flex-1 relative bg-gray-100 rounded-xl shadow flex items-center justify-center overflow-hidden">
        {/* Base Avatar */}
        <img
          src="/tryon/base-avatar.jpg"
          alt="Base silhouette"
          className="w-72 md:w-96 z-10"
        />
        {/* Equipped Clothing Layers */}
        {clothingOptions
          .filter((item) => equippedItems.includes(item.id))
          .map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.name}
              className="w-72 md:w-96 absolute z-20 pointer-events-none"
            />
          ))}
      </div>
    </div>
  );
}

export default TryOnMock;