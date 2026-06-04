"use client";

import { useState, useEffect } from "react";
import { X, Minus, Plus } from "lucide-react";
import Image from "next/image";

interface FoodDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Using the same loose object structure as the FoodCard to prevent future data conflicts
  food: {
    id?: string;
    foodName: string;
    price: number;
    image: string;
    ingredients?: string | null;
    foodDescription?: string | null;
  } | null;
  onAddToCart: (quantity: number) => void;
}

export default function FoodDetail({
  isOpen,
  onClose,
  food,
  onAddToCart,
}: FoodDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  // Reset the item counter back to 1 every time a fresh item details view opens up
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [isOpen, food]);

  if (!isOpen || !food) return null;

  const { foodName, price, image, ingredients, foodDescription } = food;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Live total price evaluation based on current counter state
  const totalPrice = price * quantity;
  const descriptionText =
    ingredients || foodDescription || "No item details are available.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      {/* Main Modal Panel (White background layout card) */}
      <div className="relative bg-white rounded-[24px] max-w-2xl w-full flex flex-col md:flex-row overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Absolute Floating X Dismiss Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-1.5 shadow-md hover:bg-zinc-100 transition text-zinc-500 active:scale-90"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {/* Left Aspect Side Block: Core Dynamic Food Banner Image */}
        <div className="relative w-full md:w-1/2 h-52 md:h-auto min-h-[260px] bg-zinc-100">
          <Image
            src={image || "/placeholder-food.jpg"}
            alt={foodName}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Right Content Block: Title metadata info, descriptions & cart actions */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-white text-black">
          {/* Upper Title Block Context Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#EF4444] mb-2 tracking-tight leading-snug">
              {foodName}
            </h2>
            <p className="text-[11px] text-zinc-500 leading-relaxed max-h-[120px] overflow-y-auto pr-1">
              {descriptionText}
            </p>
          </div>

          {/* Lower interactive Counter Control Section */}
          <div>
            {/* Row Information Panel */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-[10px] text-zinc-400 block uppercase font-bold tracking-wider">
                  Total price
                </span>
                <span className="text-lg font-black text-black tracking-tight">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Dynamic Adjustable Counter Interface Badge */}
              <div className="flex items-center gap-3 border border-zinc-200 rounded-full px-3 py-1.5 bg-zinc-50/50">
                <button
                  onClick={handleDecrement}
                  className="text-zinc-400 hover:text-black transition-colors p-0.5 active:scale-75"
                >
                  <Minus size={14} strokeWidth={3} />
                </button>
                <span className="font-bold text-xs w-4 text-center select-none">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="text-zinc-400 hover:text-black transition-colors p-0.5 active:scale-75"
                >
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>
            </div>

            {/* Black Submit Action Add Button */}
            <button
              onClick={() => {
                onAddToCart(quantity);
                onClose();
              }}
              className="w-full bg-[#181818] text-white text-xs font-semibold py-3 rounded-full hover:bg-black active:scale-[0.99] transition-all duration-150 shadow-md shadow-zinc-900/10"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
