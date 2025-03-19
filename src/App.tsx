import React, { Suspense, lazy, useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import { menuData } from './data/menuData';

// Lazy load components with preloading
const Header = lazy(() => import('./components/Header'));
const MenuSection = lazy(() => import('./components/MenuSection'));
const SpecialsSection = lazy(() => import('./components/SpecialsSection'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Memoize the filtering function
  const filterItems = useCallback((items: any[], query: string) => {
    if (!query) return items;
    const searchLower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
    );
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="space-y-12">
          {menuData.map((section, index) => {
            const filteredItems = filterItems(section.items, searchQuery);
            if (filteredItems.length === 0) return null;
            
            return (
              <Suspense key={section.title} fallback={<LoadingSpinner />}>
                <MenuSection
                  title={section.title}
                  items={filteredItems}
                  searchQuery={searchQuery}
                />
              </Suspense>
            );
          })}

          <Suspense fallback={<LoadingSpinner />}>
            <SpecialsSection />
          </Suspense>
        </div>
      </main>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;