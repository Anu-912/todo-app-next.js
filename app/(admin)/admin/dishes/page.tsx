import { CategoryForm } from "@/app/components/category-from";
import { DishCard } from "@/app/(admin)/admin/products/DishCard";
import { FoodForm } from "@/app/components/Food-form";
import { prisma } from "@/libs/prisma";

export default async function DishesPage() {
  const [foods, categories] = await Promise.all([
    prisma.foods.findMany({ include: { category: true } }),
    prisma.foodCategories.findMany(),
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Menu</h1>
      <CategoryForm />
      <FoodForm categories={categories} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <DishCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
