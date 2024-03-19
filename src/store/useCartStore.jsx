import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [], 
    addToCart: (product) =>
      set((state) => {
        const updatedCart = [...state.cart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
  }));
  