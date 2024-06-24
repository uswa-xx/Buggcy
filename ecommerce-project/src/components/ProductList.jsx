import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
          </Link>
          <div className={styles.productDetails}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
