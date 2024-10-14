import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; 

const Electronica = () => {
  const { agregarAlCarrito } = useContext(CartContext); 

  const productos = [
    { id: 1, nombre: 'Televisor', precio: 300 },
    { id: 2, nombre: 'Laptop', precio: 800 },
    { id: 3, nombre: 'Auriculares', precio: 100 }
  ];

  return (
    <div>
      <h1>Productos de Electrónica</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => agregarAlCarrito(producto)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Electronica;
