import React from 'react';
import { MenuItem } from '../data/menuData';
import OptimizedImage from './OptimizedImage';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  searchQuery: string;
}

const getEmoji = (title: string) => {
  const emojis: { [key: string]: string } = {
    'Pães & Croissants': '🥐',
    'Bolos & Doces': '🍰',
    'Sanduíches & Lanches': '🥪',
    'Cafés & Bebidas': '☕',
  };
  return emojis[title] || '✨';
};

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, searchQuery }) => {
  return (
    <section className="py-12 animate-fade-in">
      <div className="flex items-center gap-3 mb-8 transform transition-transform duration-300 hover:translate-x-2">
        <span className="text-3xl animate-bounce">{getEmoji(title)}</span>
        <h2 className="text-3xl font-bold text-amber-900 animate-slide-up">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-amber-900 group-hover:text-amber-700 transition-colors duration-300">{item.title}</h3>
                <span className="text-lg font-bold text-amber-600 group-hover:text-amber-500 transition-colors duration-300">{item.price}</span>
              </div>
              <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection; 