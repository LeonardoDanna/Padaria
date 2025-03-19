import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-16 text-amber-700 animate-fade-in bg-amber-50 py-8">
      <p className="text-lg mb-8">🌟 Feito com amor e os melhores ingredientes para tornar seu dia mais doce!</p>
      <div className="flex items-center justify-center gap-2 text-amber-600 hover:text-amber-800 transition-colors duration-300">
        <Heart className="w-4 h-4" aria-hidden="true" />
        <p className="text-sm font-medium">
          Desenvolvido por{' '}
          <a 
            href="https://www.linkedin.com/in/leonardo-danna/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-amber-600 hover:text-amber-800 underline"
          >
            Leonardo Danna
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 