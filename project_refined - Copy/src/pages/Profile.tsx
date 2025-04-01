import { useState } from 'react';
import {
  Camera,
  MapPin,
  Calendar,
  Edit2,
  Settings,
  Shield,
  Bell,
} from 'lucide-react';

interface UserProfile {
  username: string;
  joinDate: string;
  location: string;
  bio: string;
  avatar: string;
  stats: {
    itemsSwapped: number;
    buttonsEarned: number;
    co2Saved: number;
    following: number;
    followers: number;
  };
}

const profile: UserProfile = {
  username: 'Elijah123',
  joinDate: '2024-01-15',
  location: 'Singapore',
  bio: 'Passionate about sustainable fashion and reducing waste. Always looking for unique pieces to add to my collection.',
  avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop',
  stats: {
    itemsSwapped: 12,
    buttonsEarned: 2450,
    co2Saved: 288,
    following: 45,
    followers: 78,
  },
};

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(profile.bio);

  const handleEditProfile = () => {
    if (isEditing) {
      alert(`Bio updated to: "${bio}"`);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
        <p className="text-gray-600 mt-2">Your sustainable fashion journey with Threads</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="relative h-32 bg-gradient-to-r from-green-500 to-green-400">
          <button className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow hover:bg-gray-100 transition">
            <Camera className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="relative px-6 pb-6 pt-4">
          <div className="flex justify-between">
            <div className="flex items-end">
              <div className="relative -mt-16">
                <img
                  src={profile.avatar}
                  alt={`${profile.username}'s avatar`}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
                />
                <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <Camera className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="ml-6 mb-1">
                <h1 className="text-2xl font-bold text-gray-800">{profile.username}</h1>
                <div className="flex items-center gap-4 text-gray-600 mt-2 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Joined{' '}
                      {new Date(profile.joinDate).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleEditProfile}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <Edit2 className="h-4 w-4" />
              <span>{isEditing ? 'Save Profile' : 'Edit Profile'}</span>
            </button>
          </div>
          {isEditing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-6 w-full max-w-2xl p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
            />
          ) : (
            <p className="text-gray-600 mt-6 max-w-2xl">{bio}</p>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-gray-600 mb-4">Community Impact</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Items Swapped</span>
              <span className="text-2xl font-bold text-gray-800">{profile.stats.itemsSwapped}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Buttons Earned</span>
              <span className="text-2xl font-bold text-gray-800">{profile.stats.buttonsEarned}</span>
            </div>
            {/* Enhancement: Points to Buttons */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Points Earned</span>
              <span className="text-xl font-semibold text-gray-700">
                {(profile.stats.buttonsEarned * 100).toLocaleString()} pts
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CO₂ Saved (kg)</span>
              <span className="text-2xl font-bold text-gray-800">{profile.stats.co2Saved}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-gray-600 mb-4">Network</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Following</span>
              <span className="text-2xl font-bold text-gray-800">{profile.stats.following}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Followers</span>
              <span className="text-2xl font-bold text-gray-800">{profile.stats.followers}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-gray-600 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              <Settings className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Account Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              <Shield className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Privacy</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              <Bell className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Notifications</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
        </div>
        <div className="divide-y">
          {[
            { action: 'Listed a new item for swap', date: '2 hours ago' },
            { action: 'Completed "Sustainable Shopper" challenge', date: '1 day ago' },
            { action: 'Swapped Vintage Denim Jacket', date: '3 days ago' },
            { action: 'Earned Repair Master badge', date: '1 week ago' },
          ].map((activity, index) => (
            <div
              key={index}
              className="p-6 flex justify-between items-center transition hover:bg-gray-50"
            >
              <span className="text-gray-800">{activity.action}</span>
              <span className="text-gray-500 text-sm">{activity.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;