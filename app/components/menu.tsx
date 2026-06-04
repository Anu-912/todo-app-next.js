"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import FoodCard from "./FoodCard";
import FoodDetailModal from "./FoodDetail";

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
        // Filters your raw DB input arrays by current category iteration context
        const categoryFoods = foods.filter(
          (item) => item.categoryName.toLowerCase() === category.toLowerCase(),
        );

        // Safely skips showing a section entirely if it contains zero active dishes
        if (categoryFoods.length === 0) return null;

        return (
          <section key={category} className="scroll-mt-24 mb-14">
            {/* Section Header Title */}
            <h2 className="text-xl font-bold mb-6 px-2 text-zinc-100 border-l-4 border-brand-red pl-3 tracking-tight">
              {category}
            </h2>

            {/* Core Responsive Cards Layout Grid container frame */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryFoods.map((food) => (
                <FoodCard
                  key={food.id}
                  item={food}
                  onClick={() => handleCardClick(food)}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Pop-out overlay Detail Dialog Modal portal display structure */}
      <FoodDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={selectedFood}
        onAddToCart={handleAddSuccess}
      />
    </div>
  );
}
