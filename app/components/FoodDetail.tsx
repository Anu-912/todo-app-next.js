"use client";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart"; // Import your hook

export function FoodDetail({ isOpen, onClose, product }: any) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart(); // Access the cart logic

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addToCart(product, qty); // Add the specific quantity to the cart
    onClose(); // Close the modal after adding
    alert(`${product.foodName} added to cart!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative bg-white rounded-3xl p-6 w-full max-w-lg flex gap-4">
        {/* Exit Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 border border-zinc-200 rounded-full flex justify-center items-center hover:bg-zinc-100 transition-colors"
        >
          x
        </button>

        <img
          src={product.image || "/placeholder-food.jpg"}
          className="w-1/2 rounded-2xl object-cover"
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{product.foodName}</h2>
          <p className="text-zinc-500">{product.foodDescription}</p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <button
              className="h-8 w-8 rounded-full border border-black flex items-center justify-center"
              onClick={() => setQty(Math.max(1, qty - 1))}
            >
              -
            </button>
            <span className="font-bold text-xl">{qty}</span>
            <button
              className="h-8 w-8 rounded-full border border-black flex items-center justify-center"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Trigger */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white py-3 rounded-xl hover:bg-zinc-800 transition"
          >
            Add to cart ${(Number(product.price) * qty).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
