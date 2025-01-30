import React, { useState } from 'react'; //npm run dev
import { Beef as Bee, Coffee, Cookie, Sandwich, Gift, Heart, ChevronDown } from 'lucide-react';

function MenuItem({ title, description, price, image }: { title: string; description: string; price: string; image: string }) {
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
}

function MenuSection({ icon: Icon, title, children, id }: { icon: React.ElementType; title: string; children: React.ReactNode; id: string }) {
  return (
    <section id={id} className="mb-12 animate-slide-up scroll-mt-4">
      <div className="flex items-center gap-2 mb-6 transform transition-transform duration-300 hover:translate-x-2">
        <Icon className="w-8 h-8 text-amber-600 transition-transform duration-300 hover:rotate-12" />
        <h2 className="text-3xl font-bold text-amber-900">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {children}
      </div>
    </section>
  );
}

function ScrollButton() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = ['paes', 'doces', 'lanches', 'bebidas', 'especiais'];

  const scrollToNextSection = () => {
    const nextIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = document.getElementById(sections[nextIndex]);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(nextIndex);
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-6 right-6 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 animate-bounce-slow z-50 group"
      aria-label="Próxima seção"
    >
      <ChevronDown className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1" />
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div 
        className="h-72 bg-cover bg-center relative animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center transform transition-transform duration-700 hover:scale-105">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <Bee className="w-16 h-16 text-amber-400 animate-bounce" />
              <h1 className="text-4xl md:text-5xl font-bold text-white animate-slide-up text-center">Padaria</h1>
            </div>
            <p className="text-amber-200 mt-3 text-xl animate-fade-in">Artesanal & Delicioso</p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <MenuSection icon={Cookie} title="Pães & Croissants" id="paes">
          <MenuItem 
            title="Pão Francês" 
            description="Crocante por fora, macio por dentro" 
            price="R$ 3,50"
            image="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Baguete Artesanal" 
            description="Feita com fermentação natural" 
            price="R$ 12,90"
            image="https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Croissant Manteigado" 
            description="Folhado e dourado na medida certa" 
            price="R$ 8,90"
            image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Pão de Queijo" 
            description="Tradicional e irresistível" 
            price="R$ 4,50"
            image="https://images.unsplash.com/photo-1598233847491-f16487adee2f?auto=format&fit=crop&q=80"
          />
        </MenuSection>

        <MenuSection icon={Cookie} title="Bolos & Doces" id="doces">
          <MenuItem 
            title="Bolo de Chocolate Belga" 
            description="Intenso e cremoso" 
            price="R$ 15,90"
            image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Torta de Limão" 
            description="Equilíbrio perfeito entre doce e ácido" 
            price="R$ 14,90"
            image="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Cheesecake de Frutas Vermelhas" 
            description="Leve e saboroso" 
            price="R$ 16,90"
            image="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Brigadeiros Gourmet" 
            description="Vários sabores exclusivos" 
            price="R$ 5,90"
            image="https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80"
          />
        </MenuSection>

        <MenuSection icon={Sandwich} title="Sanduíches & Lanches" id="lanches">
          <MenuItem 
            title="Sanduíche Caprese" 
            description="Queijo, tomate e manjericão no pão ciabatta" 
            price="R$ 24,90"
            image="https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Croissant de Frango" 
            description="Recheado com frango cremoso e ervas" 
            price="R$ 22,90"
            image="https://images.unsplash.com/photo-1626078299034-21cd9d2f6622?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Toast de Avocado" 
            description="Pão integral, avocado e ovos" 
            price="R$ 26,90"
            image="https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Pão de Forma Caseiro" 
            description="Recheios variados" 
            price="R$ 18,90"
            image="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80"
          />
        </MenuSection>

        <MenuSection icon={Coffee} title="Cafés & Bebidas" id="bebidas">
          <MenuItem 
            title="Espresso Clássico" 
            description="Intenso e aromático" 
            price="R$ 6,90"
            image="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Cappuccino Cremoso" 
            description="Feito com leite vaporizado" 
            price="R$ 9,90"
            image="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Chás Naturais" 
            description="Opções de ervas e frutas" 
            price="R$ 7,90"
            image="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80"
          />
          <MenuItem 
            title="Suco Natural" 
            description="Frutas frescas do dia" 
            price="R$ 12,90"
            image="https://images.unsplash.com/photo-1622597467836-f3c7ca3b4c25?auto=format&fit=crop&q=80"
          />
        </MenuSection>

        {/* Especiais do Mês */}
        <div id="especiais" className="bg-gradient-to-r from-amber-100 to-amber-50 p-8 rounded-xl shadow-md mt-16 transform transition-all duration-500 hover:scale-105 animate-fade-in scroll-mt-4">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-amber-600 animate-pulse" />
            <h2 className="text-3xl font-bold text-amber-900">Especiais do Mês</h2>
          </div>
          <p className="text-amber-800 text-lg">Experimente nossas novidades sazonais e receitas exclusivas!</p>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-amber-700 animate-fade-in">
          <p className="text-lg mb-8">🌟 Feito com amor e os melhores ingredientes para tornar seu dia mais doce!</p>
          <div className="flex items-center justify-center gap-2 text-amber-600 hover:text-amber-800 transition-colors duration-300">
            <Heart className="w-4 h-4" />
            <p className="text-sm font-medium">Desenvolvido com carinho por Leonardo Danna</p>
          </div>
        </div>
      </div>

      <ScrollButton />
    </div>
  );
}

export default App;