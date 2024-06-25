import React, { useMemo } from 'react';
import OrderForm from '../components/OrderForm';
import { useCart } from '../hooks/useCart';
import styles from '../components/styles/Checkout.module.css';


const CheckoutPage = () => {
  const { cart } = useCart();

  // Calculate total price using useMemo
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }, [cart]); // Memoize based on changes in 'cart' array

  return (
    <div className={styles.Checkout}>
      
      <div><h1>Checkout</h1>
      
        <h2>Order Summary</h2>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price} x {product.quantity}</p>
          </div>
        ))}
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      
     <div> <OrderForm /></div> 
    </div>
  );
};

export default CheckoutPage;
