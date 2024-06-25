import React from 'react';
import useSWR from 'swr';
import { fetchProducts } from '../services/apiService';
import ProductList from '../components/ProductList';
import styles from '../components/styles/Home.module.css';

const Home = () => {
  const { data: products, error } = useSWR('products', fetchProducts);

  if (!products) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className={styles.home}>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
