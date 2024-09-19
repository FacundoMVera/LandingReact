import React from 'react';
import './Navbar.css';
import logo from '../assets/logito.png';
import CartWidget from './CartWidget'; // Importar el widget del carrito

const Navbar = () => {
  // Puedes gestionar el número de artículos en el carrito en el estado de la aplicación o de manera estática aquí.
  const cartItems = 3; // Aquí puedes reemplazar con tu lógica de carrito

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo de la tienda" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        {/* Agregar el widget del carrito y pasar el número de artículos */}
        <CartWidget cartItems={cartItems} />
      </nav>
    </header>
  );
};

export default Navbar;

