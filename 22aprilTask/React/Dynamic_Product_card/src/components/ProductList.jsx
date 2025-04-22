import { memo } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, isFavorite, onToggleFavorite, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={isFavorite(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default memo(ProductList);