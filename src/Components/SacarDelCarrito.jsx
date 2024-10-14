import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Precio: ${item.price}</p>
            </div>
            <button 
              className="remove-from-cart" 
              onClick={() => removeFromCart(item.id)}>
              Quitar del carrito
            </button>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <span>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</span>
      </div>
    </div>
  );
};

export default CartPage;
