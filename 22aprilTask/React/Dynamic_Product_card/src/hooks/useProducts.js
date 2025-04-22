import { useState, useEffect, useMemo } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('none');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return products.filter(product => 
      product.title.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  const sortedProducts = useMemo(() => {
    if (sortOption === 'none' || !filteredProducts.length) {
      return filteredProducts;
    }
    
    return [...filteredProducts].sort((a, b) => {
      if (sortOption === 'price-asc') {
        return a.price - b.price;
      } else if (sortOption === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [filteredProducts, sortOption]);

  return {
    products: sortedProducts,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption
  };
};