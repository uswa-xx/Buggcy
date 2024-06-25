import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span>eCommerce</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
