import React, { useState } from 'react';
import { Camera, DollarSign } from 'lucide-react';

interface SwapListing {
  id: string;
  title: string;
  description: string;
  price: number;
  buttons: number;
  username: string;
  images: string[];
  buyStatus: 'available' | 'pending' | 'sold';
  swapStatus: 'available' | 'pending' | 'swapped';
}

const sampleListings: SwapListing[] = [
  {
    id: '1',
    title: 'Denim Set',
    description: 'Lightly worn, great condition. Size M.',
    price: 45,
    buttons: 450,
    username: 'sarah_eco',
    images: [
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551537482-6e1c4c8b5b3d?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '2',
    title: 'Organic Cotton Dress',
    description: 'Never worn, with tags. Size S.',
    price: 35,
    buttons: 350,
    username: 'eco_fashionista',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'pending',
    swapStatus: 'available'
  },
  {
    id: '3',
    title: 'Black Jeans',
    description: 'Made from reclaimed fabric. One size fits most.',
    price: 20,
    buttons: 200,
    username: 'boho_lover',
    images: [
      'https://images.unsplash.com/photo-1618354691265-2f58ac0ed9dc?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691265-2f58ac0ed9dc?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '4',
    title: 'White Shirt',
    description: 'Soft, recycled materials. Size L.',
    price: 30,
    buttons: 300,
    username: 'greenwave',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '5',
    title: 'Floral Skirt',
    description: 'Vintage style, perfect for summer. Size M.',
    price: 25,
    buttons: 250,
    username: 'retro_chic',
    images: [
      'https://images.unsplash.com/photo-1594633312681-68b3a3a6a4a8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-68b3a3a6a4a8?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '6',
    title: 'Leather Jacket',
    description: 'Faux leather, slightly worn. Size L.',
    price: 50,
    buttons: 500,
    username: 'urban_style',
    images: [
      'https://images.unsplash.com/photo-1551488831-00ddcb6c0a3a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c0a3a?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '7',
    title: 'Silk Scarf',
    description: 'Handmade, vibrant colors. One size.',
    price: 15,
    buttons: 150,
    username: 'artisan_finds',
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd44d7d1e44?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606760227091-3dd44d7d1e44?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '8',
    title: 'Wool Sweater',
    description: 'Cozy and warm, perfect for winter. Size M.',
    price: 40,
    buttons: 400,
    username: 'cozy_vibes',
    images: [
      'https://images.unsplash.com/photo-1574201635302-388dd92d5c83?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574201635302-388dd92d5c83?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '9',
    title: 'Linen Pants',
    description: 'Light and breathable, ideal for summer. Size S.',
    price: 28,
    buttons: 280,
    username: 'minimalist_wardrobe',
    images: [
      'https://images.unsplash.com/photo-1594633313515-7ad6a7261a0b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633313515-7ad6a7261a0b?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  },
  {
    id: '10',
    title: 'Graphic Tee',
    description: 'Fun print, made from organic cotton. Size M.',
    price: 18,
    buttons: 180,
    username: 'trendy_threads',
    images: [
      'https://images.unsplash.com/photo-1521575107038-4a6378e8a0a0?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521575107038-4a6378e8a0a0?w=800&auto=format&fit=crop'
    ],
    buyStatus: 'available',
    swapStatus: 'available'
  }
];

function SwapCloset() {
  const [listings, setListings] = useState(sampleListings);

  const handleRequestToBuy = (id: string) => {
    setListings((prevListings) =>
      prevListings.map((listing) =>
        listing.id === id && listing.buyStatus === 'available'
          ? { ...listing, buyStatus: 'pending' }
          : listing
      )
    );
  };

  const handleRequestToSwap = (id: string) => {
    setListings((prevListings) =>
      prevListings.map((listing) =>
        listing.id === id && listing.swapStatus === 'available'
          ? { ...listing, swapStatus: 'pending' }
          : listing
      )
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Swap Closet</h1>
            <p className="text-gray-600 mt-2">Exchange clothes with the community</p>
          </div>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <Camera className="h-5 w-5" />
            <span>Create Listing</span>
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">
            Available Listings: <span className="text-green-600">{listings.filter(l => l.buyStatus === 'available').length}</span>
          </p>
        </div>
      </div>

      {/* Info Line for Conversion */}
      <div className="mb-4 text-sm text-gray-600 italic">
        💡 <strong>Note:</strong> 100 points = <strong>1 button</strong>. You can spend buttons to purchase clothes from the listings below.
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all hover:scale-105"
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-1">
                {listing.images.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100">
                    <img
                      src={image}
                      alt={`${listing.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/fallback-product.jpg';
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                @{listing.username}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{listing.title}</h3>
              <p className="text-gray-600 mt-2">{listing.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-800">${listing.price}</span>
                  </div>
                  <div className="text-gray-500 text-sm">or</div>
                  <div className="font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {listing.buttons} buttons
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  className={`flex-1 px-4 py-2 rounded-lg ${
                    listing.buyStatus === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 cursor-not-allowed'
                      : listing.buyStatus === 'sold'
                      ? 'bg-gray-100 text-gray-800 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } transition-colors`}
                  disabled={listing.buyStatus !== 'available'}
                  onClick={() => handleRequestToBuy(listing.id)}
                >
                  {listing.buyStatus === 'pending'
                    ? 'Request Pending'
                    : listing.buyStatus === 'sold'
                    ? 'Sold'
                    : 'Request to Buy'}
                </button>
                <button
                  className={`flex-1 px-4 py-2 rounded-lg ${
                    listing.swapStatus === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 cursor-not-allowed'
                      : listing.swapStatus === 'swapped'
                      ? 'bg-gray-100 text-gray-800 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } transition-colors`}
                  disabled={listing.swapStatus !== 'available'}
                  onClick={() => handleRequestToSwap(listing.id)}
                >
                  {listing.swapStatus === 'pending'
                    ? 'Swap Pending'
                    : listing.swapStatus === 'swapped'
                    ? 'Swapped'
                    : 'Request to Swap'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwapCloset;