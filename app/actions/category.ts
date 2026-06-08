"use server";
import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";

// Add 'prevState' as the first argument
export async function createCategory(prevState: any, formData: FormData) {
  const name = formData.get("categoryName") as string;

  if (!name) return { error: "Category name is required" };

  try {
    await prisma.foodCategories.create({
      data: { categoryName: name },
    });
    revalidatePath("/admin/dishes");
    return { error: undefined }; // Success
  } catch (e) {
    return { error: "Failed to create category" };
  }
}
