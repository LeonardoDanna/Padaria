import React from 'react';
import { Beef } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Header: React.FC = () => {
  return (
    <header 
      className="h-72 bg-cover bg-center relative animate-fade-in"
      role="banner"
    >
      <OptimizedImage
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=100"
        alt="Padaria artesanal"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center transform transition-transform duration-700 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <Beef className="w-16 h-16 text-amber-400 animate-bounce" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold text-white animate-slide-up text-center">Padaria</h1>
          </div>
          <p className="text-amber-200 mt-3 text-xl animate-fade-in">Artesanal & Delicioso</p>
        </div>
      </div>
    </header>
  );
};

export default Header; 