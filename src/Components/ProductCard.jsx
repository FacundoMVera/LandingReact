import React from 'react';
import { useCart } from '../Context/CartContext'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;


