const ProductCard = ({ product, isFavorite, onToggleFavorite }) => {
  const { id, title, price, image, description } = product;
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);

  return (
    <div>
      <div>
        <img 
          src={image} 
          alt={title} 
          width="200"
          height="150"
        />
        <button
          onClick={() => onToggleFavorite(id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <span>&#9825;</span>
        </button>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard