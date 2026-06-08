"use client";
import Image from "next/image";

// Using the Prisma-style fields directly
export interface FoodProduct {
  id: string;
  foodName: string;
  foodDescription?: string | null;
  ingredients?: string | null;
  price: number | string;
  image: string;
}

export function ProductCard({ product }: { product: FoodProduct }) {
  return (
    <article className="flex flex-col gap-5 rounded-[20px] bg-white p-4 transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100">
        <Image
          src={product.image || "/placeholder-food.jpg"}
          alt={product.foodName}
          fill
          unoptimized
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <button
          type="button"
          aria-label={`Add ${product.foodName} to cart`}
          className="absolute right-5 bottom-5 flex size-11 items-center justify-center rounded-full bg-white text-accent-soft shadow-sm transition hover:scale-105 z-10"
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

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="flex-1 text-[24px] font-semibold leading-8 tracking-tight text-accent-soft line-clamp-1">
            {product.foodName}
          </h3>
          <span className="text-[18px] font-semibold leading-7 text-foreground">
            ${Number(product.price).toFixed(2)}
          </span>
        </div>
        <p className="text-sm leading-5 text-foreground line-clamp-2">
          {product.foodDescription ||
            product.ingredients ||
            "No description available."}
        </p>
      </div>
    </article>
  );
}
