// Removed unused React import since it's not needed in modern React
import {
  Leaf,
  Droplet,
  Medal,
  TrendingUp,
  Repeat,
  ShoppingBag,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const trendingBrands = [
  {
    name: 'Patagonia',
    description: 'Leading sustainable outdoor clothing',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop',
    link: 'https://www.patagonia.com/'
  },
  {
    name: 'Reformation',
    description: "Sustainable women's clothing and accessories",
    image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800&auto=format&fit=crop',
    link: 'https://www.thereformation.com/'
  },
  {
    name: 'Everlane',
    description: 'Ethical modern basics',
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop',
    link: 'https://www.everlane.com/'
  }
];

function HomePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8 shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">Welcome back, Elijah123! 👋</h1>
        <p className="text-gray-600 mt-2">
          Your sustainable fashion journey continues here.
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          {
            title: 'Items Swapped',
            value: 12,
            icon: <Repeat className="h-6 w-6 text-green-600" />,
            bg: 'bg-green-100'
          },
          {
            title: 'CO2 Saved',
            value: '288kg',
            icon: <Leaf className="h-6 w-6 text-blue-600" />,
            bg: 'bg-blue-100'
          },
          {
            title: 'Water Saved',
            value: '7,200L',
            icon: <Droplet className="h-6 w-6 text-cyan-600" />,
            bg: 'bg-cyan-100'
          },
          {
            title: 'Community Rank',
            value: '#30',
            icon: <Medal className="h-6 w-6 text-yellow-600" />,
            bg: 'bg-yellow-100'
          }
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div className={`${stat.bg} p-3 rounded-lg`}>{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Sustainable Brands */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">Trending Sustainable Brands</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={brand.image}
                alt={`Brand logo of ${brand.name}`}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement; // Type assertion
                  target.src = '/fallback-brand.jpg'; // Fallback image path
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{brand.name}</h3>
                <p className="text-gray-600 mt-2">{brand.description}</p>
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-green-600 hover:text-green-800 transition"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Impact Widget */}
      <div className="bg-green-100 rounded-xl p-6 mb-12 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Threads Community Impact</h2>
        <div className="flex justify-around text-center">
          <div>
            <p className="text-3xl font-bold text-green-600">1,245</p>
            <p className="text-sm text-gray-600">Total Items Swapped</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">29,880kg</p>
            <p className="text-sm text-gray-600">Total CO2 Saved</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-green-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-green-600" />
            <span>Add New Item to Closet</span>
          </button>
          <button className="bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
            <Repeat className="h-5 w-5 text-green-600" />
            <span>Browse Swap Listings</span>
          </button>
          <button className="bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <span>Chat with AI Assistant</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;