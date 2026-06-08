import Image from "next/image";
import { Foods } from "../generated/prisma/client";
import { useState } from "react";
import FoodDetail from "./FoodDetail";

interface FoodCardProps {
  item: Foods;
  onClick: () => void;
}

export default function FoodCard({ item, onClick }: FoodCardProps) {
  const { foodName, price, image, ingredients, foodDescription } = item;
  const description =
    ingredients || foodDescription || "No description provided.";
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the card click from triggering
    console.log("Added to cart instantly:", foodName);
    // Add your cart logic here (e.g., Zustand store or Context)
  };

  return (
    <article
      onClick={() => setIsDetailOpen(true)}
      className="flex flex-col gap-5 rounded-[20px] bg-white p-4 cursor-pointer transition hover:shadow-lg"
    >
      {/* Image container using your ProductCard style */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.jpg"}
          alt={foodName}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />

        {/* Plus button using your ProductCard style */}
        <button
          onClick={handleQuickAdd}
          type="button"
          aria-label={`Add ${foodName} to cart`}
          className="absolute right-5 bottom-5 flex size-11 items-center justify-center rounded-full bg-white text-accent-soft shadow-sm transition hover:scale-105"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="size-4"
            aria-hidden="true"
          >
            <path
              d="M8 3v10M3 8h10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Info section using your ProductCard style */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="flex-1 text-[24px] font-semibold leading-8 tracking-tight text-accent-soft">
            {foodName}
          </h3>
          <span className="text-[18px] font-semibold leading-7 text-foreground">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm leading-5 text-foreground line-clamp-2">
          {description}
        </p>
      </div>
      <FoodDetail
        isOpen={isDetailOpen}
        food={prod}
        onClose={() => setIsDetailOpen(false)}
        onAddToCart={(quantity) => {
          console.log(`Adding ${quantity} of ${foodName} to cart`);
          // Add your cart logic here
        }}
      />
    </article>
  );
}
