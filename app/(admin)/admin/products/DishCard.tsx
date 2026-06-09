"use client";
import { useState } from "react";
import { DeleteButton } from "../../../components/Deletebutton";
import { Modal } from "../components/modal";
import { EditFoodForm } from "../components/edit-food-from";

export function DishCard({ food }: { food: any }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <img
        src={food.image}
        alt={food.foodName}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="font-bold mt-2">{food.foodName}</h3>
      <p className="text-green-600 font-semibold">${food.price}</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setIsEditing(true)}
          className="text-xs bg-gray-100 px-3 py-1 rounded"
        >
          Edit
        </button>
        <DeleteButton id={food.id} />
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h2 className="text-lg font-bold mb-4">Dishes info</h2>
        <EditFoodForm food={food} onClose={() => setIsEditing(false)} />
      </Modal>
    </div>
  );
}
