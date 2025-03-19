import React from 'react';

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 overflow-hidden group animate-fade-in">
      <div 
        className="h-48 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="p-6 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-amber-900 transition-colors duration-300 group-hover:text-amber-600">{title}</h3>
          <span className="text-lg font-bold text-amber-600 ml-2 transition-all duration-300 group-hover:scale-110">{price}</span>
        </div>
        <p className="text-gray-600 mt-2 text-sm transition-opacity duration-300 group-hover:opacity-90">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem; 