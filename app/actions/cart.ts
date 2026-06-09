// Import your Prisma-generated type (adjust path as needed)
"use client";
import { useState } from "react";
import { Foods } from "../generated/prisma/client";

// Create a new type for the cart items
export type CartItem = Foods & {
  quantity: number;
};

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (food: Foods, quantity: number) => {
    setCart((prev) => {
      // Check if item already exists to update quantity
      const existing = prev.find((item) => item.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      // Add as new item
      return [...prev, { ...food, quantity }];
    });
  };

  // ... localStorage logic
}
