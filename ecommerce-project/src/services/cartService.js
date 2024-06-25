import { useCart } from '../hooks/useCart';



export const removeFromCart = (productId) => {
  const removeFromCart = useCart.getState().removeFromCart;
  removeFromCart(productId);
};

export const updateCartItemQuantity = (productId, quantity) => {
  const updateCartItemQuantity = useCart.getState().updateCartItemQuantity;
  updateCartItemQuantity(productId, quantity);
};

export const clearCart = () => {
  const clearCart = useCart.getState().clearCart;
  clearCart();
};
