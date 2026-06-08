"use client";
// 1. Change import
import { useActionState } from "react";
import { createFood } from "@/app/actions/food";

export function FoodForm({ categories }: { categories: any[] }) {
  // 2. Change hook name
  const [state, action] = useActionState(createFood, undefined);

  return (
    <form
      action={action}
      className="border p-6 rounded-xl bg-white shadow-sm mb-8 space-y-4"
    >
      <h2 className="text-lg font-semibold">Add New Dish</h2>

      <input
        name="foodName"
        placeholder="Dish Name"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="price"
        type="number"
        step="0.01"
        placeholder="Price"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="image"
        placeholder="Image URL"
        className="w-full border p-2 rounded"
      />
      <input
        name="ingredients"
        placeholder="Ingredients (e.g. Flour, Sugar)"
        className="w-full border p-2 rounded"
      />
      <textarea
        name="foodDescription"
        placeholder="Description"
        className="w-full border p-2 rounded"
      />

      <select
        name="categoryName"
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.categoryName}>
            {cat.categoryName}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800"
      >
        Add Dish
      </button>

      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
      {state?.success && (
        <p className="text-green-500 text-sm">Dish added successfully!</p>
      )}
    </form>
  );
}
