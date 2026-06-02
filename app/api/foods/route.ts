import { Prisma } from "@/app/generated/prisma/client";
import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const food = await prisma.foods.findMany();
  return NextResponse.json(food);
};

export const POST = async (req: NextRequest) => {
  const data: Prisma.FoodsCreateInput = await req.json();
  const newFood = await prisma.foods.create({
    data: data,
  });

  return NextResponse.json(newFood);
};
