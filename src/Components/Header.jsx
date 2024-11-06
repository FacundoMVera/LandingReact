
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/firebaseConfig'; 
import { useAuthState } from 'react-firebase-hooks/auth'; 

function Header() {
  const [user] = useAuthState(auth); 

  return (
    <header className="header">
      <h1>Trades Maker CS</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          {user ? ( 
            <li>
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/asdf-74932.appspot.com/o/logo-usuario.png?alt=media&token=1a7b014e-16e9-417c-a28d-ed976065295a" 
                alt="Usuario conectado" 
                className="user-logo" 
              />
            </li>
          ) : ( 
            <li>
              <Link to="/auth">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

