// app/api/foods/route.ts
import { prisma } from "@/libs/prisma"; // Make sure your path to the global prisma instance is right
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  headers();
  const result = await prisma.foods.findMany({ include: { category: true } });
  return NextResponse.json(result);
};

// app/api/foods/route.ts
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // 1. Destructure the properties coming from Thunder Client
    const {
      foodName,
      price,
      image,
      ingredients,
      foodDescription,
      categoryName,
    } = body;

    // 2. Check if the category already exists
    let categoryRecord = await prisma.foodCategories.findFirst({
      where: { categoryName: categoryName },
    });

    // 3. If it doesn't exist, create it cleanly
    if (!categoryRecord) {
      categoryRecord = await prisma.foodCategories.create({
        data: { categoryName: categoryName },
      });
    }

    // 4. Create the food record and include the missing required field!
    const result = await prisma.foods.create({
      data: {
        foodName: foodName,
        price: Number(price),
        image: image,
        ingredients: ingredients,
        foodDescription: foodDescription,

        // ADD THE MISSING FIELD HERE:
        // If your schema requires a boolean, pass true/false. If it's a string, pass a placeholder like foodName

        category: {
          connect: {
            id: categoryRecord.id,
          },
        },
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
