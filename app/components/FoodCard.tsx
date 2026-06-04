// components/FoodCard.tsx
import Image from "next/image";
import { Plus } from "lucide-react";

// 1. Define and export the exact object shape the card needs
export interface CardFoodItem {
  id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients?: string | null;
  foodDescription?: string | null;
  categoryName?: string;
}

interface FoodCardProps {
  item: CardFoodItem;
  onClick: () => void;
}

export default function FoodCard({ item, onClick }: FoodCardProps) {
  const { foodName, price, image, ingredients, foodDescription } = item;
  const displayDescription =
    ingredients || foodDescription || "No description provided.";

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[24px] p-4 shadow-md flex flex-col gap-3 group transition-transform duration-200 active:scale-95 hover:scale-[1.01] select-none cursor-pointer"
    >
      <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-zinc-100">
        <Image
          src={image || "/placeholder-food.jpg"}
          alt={foodName}
          fill
          unoptimized
          sizes="(max-w-7xl) 25vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-3 right-3 bg-white hover:bg-zinc-100 border border-zinc-100 shadow-sm rounded-full p-2 text-black cursor-pointer transition-colors z-10">
          <Plus size={16} strokeWidth={3} />
        </div>
      </div>

      <div className="flex justify-between items-start px-0.5 gap-2">
        <h3 className="font-bold text-[#EF4444] text-sm leading-tight line-clamp-1 tracking-tight flex-1">
          {foodName}
        </h3>
        <span className="font-black text-black text-sm whitespace-nowrap">
          ${price.toFixed(2)}
        </span>
      </div>

      <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed px-0.5 min-h-[32px]">
        {displayDescription}
      </p>
    </div>
  );
}
