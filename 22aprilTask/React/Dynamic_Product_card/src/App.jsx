import Header from './components/Header';
import ProductList from './components/ProductList';
import SortDropdown from './components/SortDropdown';
import { useProducts } from './hooks/useProducts';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const { 
    products, 
    loading, 
    error, 
    searchQuery, 
    setSearchQuery,
    sortOption,
    setSortOption
  } = useProducts();
  
  const { favorites, toggleFavorite, isFavorite, favoritesCount } = useFavorites();

  return (
    <div>
      <Header 
        favoritesCount={favoritesCount} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main>
        <div>
          <h2>
            {searchQuery ? 'Search Results' : 'All Products'} 
            {!loading && <span>({products.length})</span>}
          </h2>
          
          <SortDropdown 
            sortOption={sortOption} 
            setSortOption={setSortOption} 
          />
        </div>
        
        <ProductList
          products={products}
          loading={loading}
          error={error}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      
      <footer>
        <p>© 2025 ProductShop</p>
      </footer>
    </div>
  );
}

export default App;