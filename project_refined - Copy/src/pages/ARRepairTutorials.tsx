import React, { useState } from 'react';
import { Play, Clock, Gavel as Level, Tag } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnailUrl: string;
  materials: string[];
}

const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Fix a Broken Zipper',
    description: 'Learn how to repair and replace broken zippers on jackets, pants, and bags.',
    duration: '15 mins',
    difficulty: 'Beginner',
    thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    materials: ['Replacement zipper', 'Needle and thread', 'Scissors', 'Pliers'],
  },
  {
    id: '2',
    title: 'Patch Torn Jeans',
    description: 'Master the art of patching and reinforcing torn denim with style.',
    duration: '25 mins',
    difficulty: 'Intermediate',
    thumbnailUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop',
    materials: ['Denim patch', 'Sewing machine', 'Thread', 'Scissors'],
  },
  {
    id: '3',
    title: 'Hem Adjustment',
    description: 'Learn professional techniques for adjusting garment lengths.',
    duration: '20 mins',
    difficulty: 'Beginner',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?w=800&auto=format&fit=crop',
    materials: ['Thread', 'Scissors', 'Measuring tape', 'Iron'],
  },
];

function ARRepairTutorials() {
  const [startedTutorials, setStartedTutorials] = useState<string[]>([]);

  const handleStartTutorial = (id: string) => {
    if (!startedTutorials.includes(id)) {
      setStartedTutorials((prev) => [...prev, id]);
      alert(`Starting AR tutorial: ${tutorials.find((t) => t.id === id)?.title}`);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-100 to-cyan-100 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">AR Repair Tutorials</h1>
        <p className="text-gray-600 mt-2">
          Extend the life of your clothes with our interactive AR repair guides
        </p>
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:scale-105"
          >
            <div className="relative">
              <img
                src={tutorial.thumbnailUrl}
                alt={tutorial.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white p-4 rounded-full transform transition-transform hover:scale-110">
                  <Play className="h-6 w-6 text-green-600" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                {tutorial.difficulty}
              </div>
              {startedTutorials.includes(tutorial.id) && (
                <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  Started
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{tutorial.title}</h3>
              <p className="text-gray-600 mt-2">{tutorial.description}</p>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{tutorial.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Level className="h-4 w-4" />
                  <span className="text-sm">{tutorial.difficulty}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Materials Needed:</h4>
                <div className="flex flex-wrap gap-2">
                  {tutorial.materials.map((material, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag className="h-3 w-3" />
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleStartTutorial(tutorial.id)}
                className="w-full mt-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400"
                disabled={startedTutorials.includes(tutorial.id)}
              >
                {startedTutorials.includes(tutorial.id) ? 'Tutorial Started' : 'Start Tutorial'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sustainability Impact */}
      <div className="bg-green-100 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Repair Impact</h3>
        <p className="text-gray-600">
          Repairing clothes has helped save{' '}
          <span className="text-green-600 font-medium">50 kg of CO2</span> and{' '}
          <span className="text-green-600 font-medium">1,200 L of water</span>!
        </p>
      </div>
    </div>
  );
}

export default ARRepairTutorials;