"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { FoodDetail } from "./FoodDetail";
import { ProductCard } from "./product-card";

// Match this to the structural fields coming from your MenuProps array
interface FoodItem {
  id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients?: string | null;
  foodDescription?: string | null;
  categoryName: string; // Used to match against categories array filter
}

interface MenuProps {
  foods: FoodItem[];
}

export default function Menu({ foods }: MenuProps) {
  // Hardcoded categories matching your custom dashboard scroll anchors
  const categories = ["Appetizers", "Salads", "Lunch favorites"];

  // State managers for detail modal overlay and toast banner notification
  const [selectedFood, setSelectedFood] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCardClick = (food: FoodItem) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleAddSuccess = (quantity: number) => {
    // Show the "Food is being added to the cart!" notification box
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    // Context / Global State logic updates can safely be connected here
    console.log(
      `Dispatched item submission hook: ${quantity}x ${selectedFood?.foodName}`,
    );
  };

  return (
    <div className="relative w-full min-h-screen text-white bg-brand-dark pb-20">
      {/* Toast Notification Banner (Matches Figma Layout overlay) */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#181818] border border-zinc-700 text-sm text-white px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-xl animate-in slide-in-from-top-4 transition-all">
          <Check size={16} className="text-emerald-500" />
          <span>Food is being added to the cart!</span>
        </div>
      )}

      {/* Main Menu Map Wrapper Loop */}
      {categories.map((category) => {
        const categoryFoods = foods.filter((f) => f.categoryName === category);
        if (categoryFoods.length === 0) return null;

        return (
          <section key={category} className="scroll-mt-24 mb-14">
            <h2 className="text-xl font-bold mb-6 px-2 text-zinc-100 border-l-4 border-brand-red pl-3 tracking-tight">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryFoods.map((food) => (
                <ProductCard
                  key={food.id}
                  product={food} // Pass the entire food object here
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Pop-out overlay Detail Dialog Modal portal display structure */}
      <FoodDetail
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={selectedFood}
        onAddToCart={handleAddSuccess}
      />
    </div>
  );
}
