// components/FoodCard.tsx
import Image from "next/image";

interface FoodCardProps {
  item: {
    id?: string;
    foodName: string;
    price: number;
    image: string;
    ingredients?: string | null;
    foodDescription?: string | null;
  };
  onClick: () => void;
}

export default function ProductCard({ item, onClick }: FoodCardProps) {
  const { foodName, price, image, ingredients, foodDescription } = item;
  const description =
    ingredients || foodDescription || "No description provided.";

  return (
    <article
      onClick={onClick}
      className="flex flex-col gap-5 rounded-[20px] bg-white p-4 transition-all hover:shadow-lg cursor-pointer"
    >
      {/* Image container using your preferred ProductCard layout */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100">
        <Image
          src={image || "/placeholder-food.jpg"}
          alt={foodName}
          fill
          unoptimized
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />

        {/* Plus button using your ProductCard SVG and size-11 styling */}
        <button
          type="button"
          aria-label={`Add ${foodName} to cart`}
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

      {/* Info section using your ProductCard typography and spacing */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="flex-1 text-[24px] font-semibold leading-8 tracking-tight text-accent-soft line-clamp-1">
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
    </article>
  );
}
