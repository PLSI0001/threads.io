import React, { useState } from 'react';
import { 
  Home, 
  ShoppingBag, 
  Repeat, 
  MessageSquare, 
  ShoppingCart, 
  Wrench, 
  Trophy, 
  User, 
  Settings,
  Leaf,
  Menu,
  X
} from 'lucide-react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyCloset from './pages/MyCloset';
import SwapCloset from './pages/SwapCloset';
import AIChatbot from './pages/AIChatbot';
import AIShoppingAssistant from './pages/AIShoppingAssistant';
import ARRepairTutorials from './pages/ARRepairTutorials';
import GamificationHub from './pages/GamificationHub';
import Profile from './pages/Profile';
import SettingsPage from './pages/Settings';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'mycloset', label: 'My Closet', icon: ShoppingBag },
    { id: 'swapcloset', label: 'Swap Closet', icon: Repeat },
    { id: 'chatbot', label: 'AI Chatbot', icon: MessageSquare },
    { id: 'shopping', label: 'AI Shopping Assistant', icon: ShoppingCart },
    { id: 'repair', label: 'AR Repair Tutorials', icon: Wrench },
    { id: 'gamification', label: 'Gamification Hub', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-green-800 to-green-600 text-white p-4 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:w-64`}
      >
        <div className="flex items-center justify-between gap-2 mb-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Threads</h1>
              <p className="text-xs text-green-100">Sustainable Fashion Hub</p>
            </div>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={`/${item.id === 'home' ? '' : item.id}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-green-700 ${
                    isActive ? 'bg-green-700 text-white' : 'text-green-100'
                  }`}
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile click
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        {/* Footer */}
        <div className="absolute bottom-4 left-4">
          <p className="text-sm text-green-100">Hello, Elijah123!</p>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-green-600 text-white rounded-lg"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Main Content */}
      <div className="flex-1 overflow-auto lg:ml-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mycloset" element={<MyCloset />} />
          <Route path="/swapcloset" element={<SwapCloset />} />
          <Route path="/chatbot" element={<AIChatbot />} />
          <Route path="/shopping" element={<AIShoppingAssistant />} />
          <Route path="/repair" element={<ARRepairTutorials />} />
          <Route path="/gamification" element={<GamificationHub />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;