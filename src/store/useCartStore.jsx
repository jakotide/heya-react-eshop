import { create } from "zustand";
import { persist } from "zustand/middleware";

// export const useCartStore = create(
//   persist(
//     (set, get) => ({
//       cart: JSON.parse(localStorage.getItem("cart")) || [],
//       addToCart: (product) =>
//         set((state) => {
//           const existingItem = state.cart.find(
//             (item) => item.id === product.id
//           );
//           if (existingItem) {
//             return { cart: state.cart };
//           }
//           const updatedCart = [...state.cart, product];
//           localStorage.setItem("cart", JSON.stringify(updatedCart));
//           return { cart: updatedCart };
//         }),
//       removeFromCart: (productId) => {
//         set((state) => {
//           const updatedCart = state.cart.filter(
//             (item) => item.id !== productId
//           );
//           localStorage.setItem("cart", JSON.stringify(updatedCart));
//           return { cart: updatedCart };
//         });
//       },
//     }),
//     {
//       name: "cart-storage",
//     }
//   )
// );
export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: JSON.parse(localStorage.getItem("cart")) || [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            // Increment quantity of existing item
            existingItem.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return { cart: state.cart };
          }
          const updatedCart = [...state.cart, { ...product, quantity: 1 }];
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }),
      removeFromCart: (productId) => {
        set((state) => {
          const updatedCart = state.cart.filter(
            (item) => item.id !== productId
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        });
      },
      incrementQuantity: (productId) => {
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        });
      },
      decrementQuantity: (productId) => {
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
