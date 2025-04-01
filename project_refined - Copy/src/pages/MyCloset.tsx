import React from 'react';
import { Upload, Tag } from 'lucide-react';

interface ClothingItem {
  id: string;
  name: string;
  material: string;
  purchaseDate: string;
  imageUrl: string;
}

const sampleCloset: ClothingItem[] = [
  {
    id: '1',
    name: 'Organic Cotton T-Shirt',
    material: 'Organic Cotton',
    purchaseDate: '2024-01-15',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Recycled Denim Jeans',
    material: 'Recycled Denim',
    purchaseDate: '2024-02-01',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Hemp Blend Sweater',
    material: 'Hemp, Organic Cotton',
    purchaseDate: '2024-03-01',
    imageUrl: 'https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?w=800&auto=format&fit=crop'
  }
];

function MyCloset() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Closet</h1>
            <p className="text-gray-600 mt-2">Manage your sustainable wardrobe</p>
          </div>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <Upload className="h-5 w-5" />
            <span>Add New Item</span>
          </button>
        </div>
        {/* Closet Stats */}
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">Total Items: <span className="text-green-600">{sampleCloset.length}</span></p>
        </div>
      </div>

      {/* Clothing Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCloset.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all hover:scale-105"
          >
            <div className="relative h-64">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {/* Placeholder for second image */}
              <div className="absolute bottom-2 right-2 flex gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Tag className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">{item.material}</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Purchased: {new Date(item.purchaseDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Eco-Friendly
                </span>
              </div>
              <button className="mt-4 w-full bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors">
                List for Swap
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCloset;