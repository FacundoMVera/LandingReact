
import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
