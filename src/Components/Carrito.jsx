import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; 

const Carrito = () => {
  const { carrito } = useContext(CartContext); 

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
