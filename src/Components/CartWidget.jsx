import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; /*icono de un tiktok q vi xD */

const CartWidget = ({ cartItems }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="cart-count">{cartItems}</span>
    </div>
  );
};

export default CartWidget;
