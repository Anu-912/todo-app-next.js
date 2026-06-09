import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Foods } from "@/app/generated/prisma/client";

export type CartItem = Foods & { quantity: number };

interface CartStore {
  cart: CartItem[];
  addToCart: (food: Foods, quantity: number) => void;
  removeFromCart: (foodId: string) => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (food, quantity) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === food.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === food.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }
          return { cart: [...state.cart, { ...food, quantity }] };
        }),

      removeFromCart: (foodId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== foodId),
        })),
    }),
    {
      name: "my-cart", // Key in localStorage
    },
  ),
);
