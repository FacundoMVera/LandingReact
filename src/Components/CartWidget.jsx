import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import carritoImg from '../assets/logito.png'; 

const CartWidget = () => {
  const { totalItems } = useContext(CartContext); 

  return (
    <div style={{ position: 'relative' }}>
      <img src={carritoImg} alt="Carrito" width="40" />
      {totalItems > 0 && (
        <span style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '5px 10px',
        }}>
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartWidget;

