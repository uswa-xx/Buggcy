import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetchProductById } from '../services/apiService';
import { useCart } from '../hooks/useCart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/ProductDetail.module.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useSWR(`product-${productId}`, () => fetchProductById(productId));
  const addToCart = useCart((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Product added to cart!');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  return (
    <div className={styles.productDetail}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      {product.rating && (
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      )}
      <button onClick={handleAddToCart}>Add to Cart</button>
      <ToastContainer />
    </div>
  );
};

export default ProductDetailsPage;
