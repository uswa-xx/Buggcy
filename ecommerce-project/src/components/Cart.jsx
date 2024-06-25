import React, { useMemo, useCallback } from 'react';
import { useCart } from '../hooks/useCart';
import styles from './styles/Cart.module.css';

const Cart = () => {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const updateCartItemQuantity = useCart((state) => state.updateCartItemQuantity);

  // Memoize the cart items to avoid unnecessary re-renders
  const memoizedCartItems = useMemo(() => {
    return cart.map((item) => (
      <div key={item.id} className={styles.cartItem}>
        <h2>{item.title}</h2>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => handleUpdateCartItemQuantity(item.id, parseInt(e.target.value))}
          min="1"
        />
      </div>
    ));
  }, [cart]);

  // Memoize the removeFromCart function
  const handleRemoveFromCart = useCallback((id) => {
    removeFromCart(id);
  }, [removeFromCart]);

  // Memoize the updateCartItemQuantity function
  const handleUpdateCartItemQuantity = useCallback((id, quantity) => {
    updateCartItemQuantity(id, quantity);
  }, [updateCartItemQuantity]);

  return (
    <div className={styles.cart}>
      {memoizedCartItems}
    </div>
  );
};

export default Cart;
