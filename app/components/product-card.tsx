"use client";
import Image from "next/image";
import { FoodDetail } from "./FoodDetail";
import { useState } from "react";
import { Foods } from "../generated/prisma/client";
export interface MinimalProduct {
  id: string;
  foodName: string;
  price: number;
  image: string | null;
  foodDescription?: string | null;
  // Don't add createdAt/updatedAt here if you aren't using them in the card!
}

export function ProductCard({ product }: { product: MinimalProduct }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Removed the handleQuickAdd logic entirely
  // Now, clicking either the image area OR the plus button triggers the modal

  return (
    <>
      <article
        onClick={() => setIsDetailOpen(true)}
        className="flex flex-col gap-5 rounded-[20px] bg-white p-4 transition-all hover:shadow-lg cursor-pointer"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100">
          <Image
            src={product.image || "/placeholder-food.jpg"}
            alt={product.foodName}
            fill
            unoptimized
            sizes="(min-width: 1024px) 400px, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Now the button also triggers the same state as the article */}
          <button
            type="button"
            className="absolute right-5 bottom-5 flex size-11 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:scale-105 z-10"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-4">
              <path
                d="M8 3v10M3 8h10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <h3 className="flex-1 text-[24px] font-semibold leading-8 text-black line-clamp-1">
              {product.foodName}
            </h3>
            <span className="text-[18px] font-semibold text-black">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-zinc-500 line-clamp-2">
            {product.foodDescription || "No description available."}
          </p>
        </div>
      </article>

      {/* The FoodDetail modal now handles the "Add to Cart" and quantity logic */}
      <FoodDetail
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        product={product}
      />
    </>
  );
}
