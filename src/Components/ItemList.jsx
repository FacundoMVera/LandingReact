import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/item/${item.id}`}>
            {item.name} - ${item.price}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

