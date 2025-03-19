import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 animate-shimmer rounded-lg">
          <div className="absolute inset-0 bg-white/50 animate-pulse rounded-lg" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-amber-50">
          <span className="text-amber-500">Erro ao carregar imagem</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 