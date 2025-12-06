import React from 'react';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
  highlightWord: string;
}

const cards: Card[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    title: 'A starry night',
    description: 'Look up at the night sky, and find yourself immersed in the amazing mountain range of Aspen.',
    highlightWord: 'immersed'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    title: 'Misty mornings',
    description: 'Capture the stunning essence of the early morning sunrise in the Californian wilderness.',
    highlightWord: 'essence'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    title: 'Utah sunsets',
    description: 'Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.',
    highlightWord: 'stunning'
  }
];

const DarkCardsGrid: React.FC = () => {
  const highlightText = (text: string, highlightWord: string) => {
    const parts = text.split(new RegExp(`(${highlightWord})`, 'gi'));
    return (
      <>
        {parts.map((part, index) => 
          part.toLowerCase() === highlightWord.toLowerCase() ? (
            <span key={index} className="font-semibold text-white">{part}</span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-gray-300 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {highlightText(card.description, card.highlightWord)}
                </p>
                
                {/* Button */}
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-blue-400 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Explore
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarkCardsGrid;