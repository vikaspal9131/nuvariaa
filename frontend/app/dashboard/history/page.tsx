"use client"

import { Save } from 'lucide-react';
import React from 'react';

interface Story {
  id: number;
  date: string;
  title: string;
  tags: string[];
}

const stories: Story[] = [
  {
    id: 1,
    date: 'October 1, 2012',
    title: 'Basic principles of responsive web design',
    tags: ['Design', 'Dev', 'Typography']
  },
  {
    id: 2,
    date: 'October 1, 2012',
    title: 'The ultimate guide to proper use of animation',
    tags: ['Design', 'Dev', 'Typography']
  },
  {
    id: 2,
    date: 'October 1, 2012',
    title: 'The ultimate guide to proper use of animation',
    tags: ['Design', 'Dev', 'Typography']
  },
  {
    id: 2,
    date: 'October 1, 2012',
    title: 'The ultimate guide to proper use of animation',
    tags: ['Design', 'Dev', 'Typography']
  },
  {
    id: 2,
    date: 'October 1, 2012',
    title: 'The ultimate guide to proper use of animation',
    tags: ['Design', 'Dev', 'Typography']
  },
  {
    id: 2,
    date: 'October 1, 2012',
    title: 'The ultimate guide to proper use of animation',
    tags: ['Design', 'Dev', 'Typography']
  },
  {
    id: 2,
    date: 'October 1, 2012',
    title: 'The ultimate guide to proper use of animation',
    tags: ['Design', 'Dev', 'Typography']
  },

];

const StoriesComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="h-screen overflow-y-auto   bg-black text-white px-6 py-12 md:px-12 lg:px-24 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-5xl font-inter font-semibold mb-2">  Save </h1>
        
      
        </div>

        {/* Stories List */}
        <div className=" overflow-y-auto ">
          {stories.map((story) => (
            <article key={story.id} className="border border-gray-800 ">
              <div className="flex flex-col md:flex-row md:items-start ">
              
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold  leading-tight hover:text-gray-300 transition-colors cursor-pointer">
                    {story.title}
                  </h3>
                 
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-6 mt-16">
          <button 
            className="text-gray-600 hover:text-gray-400 transition-colors disabled:opacity-30"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          >
            ←
          </button>
          <button 
            className={`text-2xl font-bold transition-colors ${
              currentPage === 1 ? 'text-white' : 'text-gray-600 hover:text-gray-400'
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button 
            className={`text-2xl font-bold transition-colors ${
              currentPage === 2 ? 'text-white' : 'text-gray-600 hover:text-gray-400'
            }`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button 
            className="text-gray-600 hover:text-gray-400 transition-colors disabled:opacity-30"
            disabled={currentPage === 2}
            onClick={() => setCurrentPage(prev => Math.min(2, prev + 1))}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoriesComponent;