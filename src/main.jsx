import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './Context/CartContext';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
