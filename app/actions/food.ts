"use server";
import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function updateFood(
  id: string,
  prevState: any,
  formData: FormData,
) {
  const foodName = formData.get("foodName") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image") as string;

  try {
    await prisma.foods.update({
      where: { id },
      data: { foodName, price, image },
    });
    revalidatePath("/dishes");
    return { success: true };
  } catch (e) {
    return { error: "Failed to update dish" };
  }
}
export async function deleteFood(id: string) {
  try {
    await prisma.foods.delete({
      where: { id },
    });
    revalidatePath("/dishes"); // This refreshes the page automatically
    return { success: true };
  } catch (e) {
    return { error: "Failed to delete dish" };
  }
}

export async function createFood(prevState: any, formData: FormData) {
  const foodName = formData.get("foodName") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image") as string;
  const ingredients = formData.get("ingredients") as string;
  const foodDescription = formData.get("foodDescription") as string;
  const categoryName = formData.get("categoryName") as string;

  if (!foodName || !categoryName)
    return { error: "Name and Category are required" };

  try {
    // 1. Find the category ID based on the name provided
    const category = await prisma.foodCategories.findFirst({
      where: { categoryName: categoryName },
    });

    if (!category) return { error: "Category not found" };

    // 2. Create the food using the found category ID
    await prisma.foods.create({
      data: {
        foodName,
        price,
        image,
        ingredients,
        foodDescription,
        categoryId: category.id,
      },
    });

    revalidatePath("/dishes");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "Failed to add food" };
  }
}
