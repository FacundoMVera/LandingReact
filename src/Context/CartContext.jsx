import React, { useState, createContext } from 'react';
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const totalItems = carrito.length;

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

