
import React from 'react';
import skinsData from '../data/skinsData';

function ProductList() {
  return (
    <div className="product-list">
      {skinsData.map((skin) => (
        <div key={skin.id} className="product-card">
          <img src={skin.imageUrl} alt={skin.name} className="product-image" />
          <h3>{skin.name}</h3>
          <p>Precio: ${skin.price}</p>
          <button onClick={() => addToCart(product)}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
