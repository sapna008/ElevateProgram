import { useState, useEffect, useCallback } from 'react';

const LOCAL_STORAGE_KEY = 'productFavs';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((productId) => {
    setFavorites(currentFavorites => {
      if (currentFavorites.includes(productId)) {
        return currentFavorites.filter(id => id !== productId);
      } else {
        return [...currentFavorites, productId];
      }
    });
  }, []);

  const isFavorite = useCallback((productId) => {
    return favorites.includes(productId);
  }, [favorites]);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length
  };
};