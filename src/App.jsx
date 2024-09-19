import React from 'react';
import NavBar from './Components/NavBar'; 
import ItemListContainer from './Components/ItemListContainer';  


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer mensajeBienvenida="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
