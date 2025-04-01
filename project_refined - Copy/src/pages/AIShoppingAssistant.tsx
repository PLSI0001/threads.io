import React, { useState } from 'react';
import { ShoppingBag, Heart, Star, ArrowRight } from 'lucide-react';

interface ProductRecommendation {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  sustainabilityScore: number;
  imageUrl: string;
  tags: string[];
}

const recommendations: ProductRecommendation[] = [
  {
    id: '1',
    name: 'Organic Cotton Sweater',
    brand: 'EcoWear',
    price: 89.99,
    rating: 4.5,
    sustainabilityScore: 9.2,
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop',
    tags: ['Organic', 'Fair Trade', 'Carbon Neutral'],
  },
  {
    id: '2',
    name: 'Recycled Denim Jeans',
    brand: 'GreenDenim',
    price: 129.99,
    rating: 4.8,
    sustainabilityScore: 8.9,
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop',
    tags: ['Recycled Materials', 'Water Saving', 'Ethical Labor'],
  },
  {
    id: '3',
    name: 'Hemp Blend T-Shirt',
    brand: 'PureEarth',
    price: 45.99,
    rating: 4.6,
    sustainabilityScore: 9.5,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop',
    tags: ['Hemp', 'Organic', 'Biodegradable'],
  },
];

function AIShoppingAssistant() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const addToCart = (id: string) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
      alert(`${recommendations.find((p) => p.id === id)?.name} added to cart!`);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">AI Shopping Assistant</h1>
        <p className="text-gray-600 mt-2">
          Personalized sustainable fashion recommendations to fight fast fashion
        </p>
      </div>

      {/* Shopping Profile */}
      <div className="bg-green-50 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Shopping Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <h3 className="font-medium text-gray-700">Style Preferences</h3>
                <p className="text-gray-600 text-sm mt-1">Minimalist, Casual, Sustainable</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <h3 className="font-medium text-gray-700">Favorite Materials</h3>
                <p className="text-gray-600 text-sm mt-1">Organic Cotton, Hemp, Recycled Polyester</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <h3 className="font-medium text-gray-700">Size Preferences</h3>
                <p className="text-gray-600 text-sm mt-1">M (Top), 32 (Bottom)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
                <h3 className="font-medium text-gray-700">Color Palette</h3>
                <p className="text-gray-600 text-sm mt-1">Earth tones, Neutrals</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <span>Update Preferences</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:scale-105"
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/fallback-product.jpg';
                  }}
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.sustainabilityScore} eco score
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">{product.brand}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-green-600 font-medium mt-2">${product.price}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400"
                  disabled={cart.includes(product.id)}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>{cart.includes(product.id) ? 'In Cart' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Impact */}
      <div className="bg-green-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Impact</h3>
        <p className="text-gray-600">
          By shopping sustainably, you’ve helped save <span className="text-green-600 font-medium">150 kg of CO2</span> and{' '}
          <span className="text-green-600 font-medium">3,500 L of water</span>!
        </p>
      </div>
    </div>
  );
}

export default AIShoppingAssistant;
