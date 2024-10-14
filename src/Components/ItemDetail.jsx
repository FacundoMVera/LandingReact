import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${item.name}`);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;

