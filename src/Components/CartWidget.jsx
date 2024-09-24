import React, { useContext } from 'react';
import { CartContext } from './CartContext';  

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);  

  return (
    <div className="cart-widget">
      <a href="/carrito">
        🛒 Carrito ({cartQuantity()}) {}
      </a>
    </div>
  );
};

export default CartWidget;

