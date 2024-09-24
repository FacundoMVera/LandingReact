import React from 'react';
import './Navbar.css';
import logo from '../assets/logito.png';
import CartWidget from './CartWidget'; 

const Navbar = () => {
  
  const cartItems = 3; 

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo de la tienda" />
        </div>
        <ul className="nav-links">
          <li><a href="">Inicio</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
        {}
        <CartWidget cartItems={cartItems} />
      </nav>
    </header>
  );
};

export default Navbar;

