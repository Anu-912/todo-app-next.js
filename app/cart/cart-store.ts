import { create } from "zustand";
import { Foods } from "../generated/prisma/client";

export type CartItem = {
  quantity: number;
  price: number;
  image: string;
  id: string;
  foodName: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void; // add or increase qty
  removeItem: (id: string) => void; // delete item completely
  increaseQty: (id: string) => void; // press + button
  decreaseQty: (id: string) => void; // press - button (remove if reaches 0)
  clearCart: () => void; // empty the whole cart
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (newItem) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === newItem.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, { ...newItem, quantity: 1 }] };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  increaseQty: (id) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    }));
  },

  decreaseQty: (id) => {
    set((state) => {
      const item = state.items.find((i) => i.id === id);
      if (!item) return state;
      if (item.quantity <= 1) {
        return { items: state.items.filter((i) => i.id !== id) };
      }
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
        ),
      };
    });
  },

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}));
