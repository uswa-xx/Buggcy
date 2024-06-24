import React, { useMemo } from 'react';
import OrderForm from '../components/OrderForm';
import { useCart } from '../hooks/useCart';

const CheckoutPage = () => {
  const { cart } = useCart();

  // Calculate total price using useMemo
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }, [cart]); // Memoize based on changes in 'cart' array

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Order Summary</h2>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price} x {product.quantity}</p>
          </div>
        ))}
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <OrderForm />
    </div>
  );
};

export default CheckoutPage;
