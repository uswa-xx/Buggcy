import React from 'react';
import Cart from '../components/Cart';
import styles from '../components/styles/CartPage.module.css';

const CartPage = () => {
  return (
    <div className={styles.page}>
      <h1>Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
