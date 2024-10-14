import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; 

const Moda = () => {
  const { agregarAlCarrito } = useContext(CartContext); 
  const productos = [
    { id: 1, nombre: 'Camisa', precio: 50 },
    { id: 2, nombre: 'Pantalón', precio: 60 },
    { id: 3, nombre: 'Zapatos', precio: 100 }
  ];

  return (
    <div>
      <h1>Productos de Moda</h1>
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

export default Moda;
