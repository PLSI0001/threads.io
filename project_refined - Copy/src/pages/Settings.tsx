import React, { useState } from 'react';
import { Bell, Shield, Globe, CreditCard, HelpCircle, LogOut } from 'lucide-react';

function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('elijah@example.com');
  const [username, setUsername] = useState('Elijah123');
  const [bio, setBio] = useState(
    'Passionate about sustainable fashion and reducing waste. Always looking for unique pieces to add to my collection.'
  );
  const [notifications, setNotifications] = useState({
    'New swap requests': true,
    'Messages from other users': true,
    'Challenge updates': true,
    'Community announcements': true,
    'Special offers and promotions': true,
  });

  const handleSaveChanges = () => {
    setIsEditing(false);
    alert(`Saved changes: Email: ${email}, Username: ${username}, Bio: "${bio}"`);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEmail('elijah@example.com');
    setUsername('Elijah123');
    setBio(
      'Passionate about sustainable fashion and reducing waste. Always looking for unique pieces to add to my collection.'
    );
  };

  const handleNotificationToggle = (key: string) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      alert('Logged out successfully!');
      // Add real logout logic here (e.g., redirect to login page)
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-2">
          Customize your eco-friendly experience with Threads
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          {/* Account Settings */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 transition-all hover:shadow-md">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              {isEditing ? (
                <div className="flex gap-4">
                  <button
                    onClick={handleSaveChanges}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Edit Account
                </button>
              )}
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 transition-all hover:shadow-md">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Notification Preferences</h2>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(notifications).map(([item, enabled]) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="text-gray-700">{item}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={() => handleNotificationToggle(item)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Quick Settings */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Quick Settings</h2>
            </div>
            <div className="p-4">
              <nav className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Notifications</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Shield className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Privacy</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Language</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Payment Methods</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <HelpCircle className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Help & Support</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 rounded-xl p-6 transition-all hover:shadow-md">
            <h3 className="text-red-800 font-medium mb-4">Danger Zone</h3>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sustainability Tip */}
      <div className="bg-green-100 rounded-xl p-6 mt-8">
        <p className="text-gray-600">
          Tip: Adjust notifications to stay engaged with sustainable challenges and swaps!
        </p>
      </div>
    </div>
  );
}

export default Settings;