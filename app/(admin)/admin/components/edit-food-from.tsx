"use client";
import { useActionState } from "react";
import { updateFood } from "@/app/actions/food";

export function EditFoodForm({
  food,
  onClose,
}: {
  food: any;
  onClose: () => void;
}) {
  const updateWithId = updateFood.bind(null, food.id);
  const [state, action] = useActionState(updateWithId, null as any);

  return (
    <form
      action={async (formData) => {
        await action(formData);
        onClose();
      }}
      className="p-4 border rounded bg-gray-50"
    >
      <input
        name="foodName"
        defaultValue={food.foodName}
        className="w-full border p-2 mb-2"
      />
      <input
        name="price"
        type="number"
        defaultValue={food.price}
        className="w-full border p-2 mb-2"
      />
      <input
        name="image"
        defaultValue={food.image}
        className="w-full border p-2 mb-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
      <button type="button" onClick={onClose} className="ml-2">
        Cancel
      </button>
    </form>
  );
}
