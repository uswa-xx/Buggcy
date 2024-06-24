import { create } from 'zustand';

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      return {
        cart: state.cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    } else {
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((product) => product.id !== productId),
  })),
  updateCartItemQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map((product) =>
      product.id === productId ? { ...product, quantity } : product
    ),
  })),
  clearCart: () => set({ cart: [] }),
}));
