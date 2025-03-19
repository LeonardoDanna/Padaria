import React from 'react';
import { Gift } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const SpecialsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-amber-100 to-amber-50 p-8 rounded-xl shadow-md mt-16 transform transition-all duration-500 hover:scale-105 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl animate-bounce">🎁</span>
        <h2 className="text-3xl font-bold text-amber-900 animate-slide-up">Especiais do Mês</h2>
      </div>
      <p className="text-amber-800 text-lg mb-8">Experimente nossas novidades sazonais e receitas exclusivas! 🌟</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in">
          <div className="relative h-48">
            <OptimizedImage
              src="https://cdn.awsli.com.br/2500x2500/2658/2658919/produto/257217444/fatia-de-bolo-vegano-de-brigadeiro-com-morangos-sem-gl-ten-fnv2j0u5hp.png"
              alt="Bolo de Morango com Chocolate"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-amber-900">Bolo de Morango com Chocolate 🍓</h3>
              <span className="text-lg font-bold text-amber-600">R$ 29,90</span>
            </div>
            <p className="text-gray-600 mt-2">Camadas de bolo de chocolate, recheio de morango fresco e cobertura de ganache. Edição limitada!</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium animate-pulse">Novidade</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in">
          <div className="relative h-48">
            <OptimizedImage
              src="https://img.freepik.com/fotos-gratis/vista-lateral-do-croissant-decorado-com-chocolate-em-uma-placa-de-madeira_140725-10171.jpg"
              alt="Croissant de Nutella"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-amber-900">Croissant de Nutella 🥐</h3>
              <span className="text-lg font-bold text-amber-600">R$ 12,90</span>
            </div>
            <p className="text-gray-600 mt-2">Croissant folhado recheado com Nutella e coberto com chocolate belga derretido.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium animate-pulse">Mais Vendido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection; 