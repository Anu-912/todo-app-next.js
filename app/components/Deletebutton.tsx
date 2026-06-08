"use client";
import { deleteFood } from "@/app/actions/food";
import { useTransition } from "react";

export function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() =>
        startTransition(() => {
          deleteFood(id); // Just call it, don't worry about the return
        })
      }
      className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
