
import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data());
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductPage;
