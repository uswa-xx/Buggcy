import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetchProductById } from '../services/apiService';
import { useCart } from '../hooks/useCart';
import styles from './styles/ProductDetail.module.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useSWR(`product-${productId}`, () => fetchProductById(productId));
  const addToCart = useCart((state) => state.addToCart);
  const [showMessage, setShowMessage] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Show message for 3 seconds
  };

  return (
    <div className={styles.productDetail}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      {product.rating && ( // Check if rating data exists
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      )}
      <button onClick={handleAddToCart}>Add to Cart</button>
      {showMessage && <div className={styles.addedToCartMessage}>Product added to cart!</div>}
    </div>
  );
};

export default ProductDetail;
