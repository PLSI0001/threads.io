import React, { useState } from 'react';
import { Trophy, Star, Award, Target, Users, TrendingUp } from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
  icon: keyof typeof icons;
}

const icons = {
  Trophy,
  Star,
  Award,
  Target,
  Users,
  TrendingUp,
};

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Sustainable Shopper',
    description: 'Purchase 5 items from sustainable brands',
    reward: 500,
    progress: 3,
    total: 5,
    icon: 'Star',
  },
  {
    id: '2',
    title: 'Repair Master',
    description: 'Complete 3 repair tutorials',
    reward: 300,
    progress: 1,
    total: 3,
    icon: 'Trophy',
  },
  {
    id: '3',
    title: 'Community Champion',
    description: 'Swap 10 items with other users',
    reward: 1000,
    progress: 7,
    total: 10,
    icon: 'Users',
  },
];

function GamificationHub() {
  const [buttons, setButtons] = useState(2450);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const handleCompleteChallenge = (id: string, reward: number) => {
    if (!completedChallenges.includes(id)) {
      setCompletedChallenges((prev) => [...prev, id]);
      setButtons((prev) => prev + reward);
      alert(`Challenge completed! You earned ${reward} buttons.`);
    }
  };

  const handleSpendButtons = () => {
    if (buttons >= 100) {
      setButtons((prev) => prev - 100);
      alert('Spent 100 buttons on a sustainable item!');
    } else {
      alert('Not enough buttons to spend!');
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gamification Hub</h1>
        <p className="text-gray-600 mt-2">
          Earn buttons for sustainable actions and fight fast fashion
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transition-all hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-lg">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{buttons.toLocaleString()}</h2>
              <p className="text-green-100">Total Buttons</p>
            </div>
          </div>
          <button
            onClick={handleSpendButtons}
            className="w-full bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            Spend Buttons
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Level 12</h2>
              <p className="text-gray-600">Sustainable Explorer</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress to Level 13</span>
              <span className="text-gray-800 font-medium">65%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-full w-[65%] bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">15</h2>
              <p className="text-gray-600">Achievements Unlocked</p>
            </div>
          </div>
          <button className="w-full mt-4 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            View All Achievements
          </button>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Active Challenges</h2>
        </div>
        <div className="divide-y">
          {challenges.map((challenge) => {
            const Icon = icons[challenge.icon];
            const progressPercentage = Math.round((challenge.progress / challenge.total) * 100);
            return (
              <div
                key={challenge.id}
                className="p-6 transition-all hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{challenge.description}</p>
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-800 font-medium">
                          {challenge.progress} / {challenge.total} ({progressPercentage}%)
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-semibold">{challenge.reward} buttons</div>
                    <button
                      onClick={() => handleCompleteChallenge(challenge.id, challenge.reward)}
                      className={`mt-2 text-sm ${
                        challenge.progress === challenge.total && !completedChallenges.includes(challenge.id)
                          ? 'text-green-600 hover:text-green-800'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                      disabled={
                        challenge.progress < challenge.total || completedChallenges.includes(challenge.id)
                      }
                    >
                      {completedChallenges.includes(challenge.id)
                        ? 'Completed'
                        : challenge.progress === challenge.total
                        ? 'Claim Reward'
                        : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard and Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Leaderboard</h2>
          <div className="space-y-4">
            {[
              { rank: 1, name: 'Sarah K.', points: 5420 },
              { rank: 2, name: 'Michael R.', points: 4890 },
              { rank: 3, name: 'Emma L.', points: 4550 },
              { rank: 4, name: 'Tanner T.', points: 4210 },
              { rank: 5, name: 'David M.', points: 3980 },
            ].map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-3 rounded-lg ${
                  user.name === 'You' ? 'bg-green-50 font-medium' : ''
                }`}
              >
                <span className="w-8 text-center font-medium text-gray-600">#{user.rank}</span>
                <span className="flex-1">{user.name}</span>
                <span className="font-medium text-gray-800">{user.points}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { title: 'First Swap', date: '2 days ago', points: 100 },
              { title: 'Repair Novice', date: '5 days ago', points: 200 },
              { title: 'Eco Warrior', date: '1 week ago', points: 500 },
              { title: 'Community Helper', date: '2 weeks ago', points: 300 },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{achievement.title}</div>
                  <div className="text-sm text-gray-500">{achievement.date}</div>
                </div>
                <div className="text-green-600 font-medium">+{achievement.points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Impact */}
      <div className="bg-green-100 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Gamification Impact</h3>
        <p className="text-gray-600">
          Your challenges have saved{' '}
          <span className="text-green-600 font-medium">120 kg of CO2</span> and{' '}
          <span className="text-green-600 font-medium">2,800 L of water</span>!
        </p>
      </div>
    </div>
  );
}

export default GamificationHub;