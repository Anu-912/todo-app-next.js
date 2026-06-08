"use client";
// ADD THIS IMPORT LINE (adjust the path if your action is elsewhere)
import { createCategory } from "@/app/actions/category";
import { useActionState } from "react";

export function CategoryForm() {
  // Change 'undefined' to an empty object or initial state
  const [state, action] = useActionState(createCategory, null as any);
  // ... rest of your code
  return (
    <form
      action={action}
      className="flex gap-2 mb-8 p-4 border rounded-lg bg-zinc-50"
    >
      <div className="flex flex-col flex-1">
        <input
          name="categoryName"
          placeholder="New Category (e.g. Appetizers)"
          className="border p-2 rounded w-full"
          required
        />
        {state?.error && (
          <p className="text-red-500 text-sm mt-1">{state.error}</p>
        )}
      </div>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Add Category
      </button>
    </form>
  );
}
