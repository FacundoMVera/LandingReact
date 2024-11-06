import React from 'react';
import { useCart } from '../Context/CartContext'; 
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              <button onClick={handleCheckout} className="checkout-button">
                Comprar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
