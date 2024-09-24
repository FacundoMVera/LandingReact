import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Product from './Components/Product';
import { CartProvider } from './Components/CartContext';  

function App() {
  const sampleProduct = { name: 'Producto de Prueba', price: 100 };

  return (
    <CartProvider>  {}
      <NavBar />
      <ItemListContainer mensajeBienvenida="¡Bienvenido a nuestra tienda!" />
      {}
      <Product product={sampleProduct} />
    </CartProvider>
  );
}

export default App;
