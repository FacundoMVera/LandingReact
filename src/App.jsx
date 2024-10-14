import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Home from './Components/Home';
import Electronica from './Components/Electronica';
import Moda from './Components/Moda';
import Carrito from './Components/Carrito'; 
import CartWidget from './Components/CartWidget';



function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/electronica">Electrónica</Link>
              </li>
              <li>
                <Link to="/moda">Moda</Link>
              </li>
              <li>
                <Link to="/carrito">
                  <CartWidget /> {}
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/electronica" element={<Electronica />} />
            <Route path="/moda" element={<Moda />} />
            <Route path="/carrito" element={<Carrito />} /> {}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
