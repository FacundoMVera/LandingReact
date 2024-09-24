import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);  

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>  {/* Botón para agregar al carrito */}
    </div>
  );
};

export default Product;
