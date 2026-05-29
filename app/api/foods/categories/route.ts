import { Prisma } from "@/app/generated/prisma/client";
import { prisma } from "@/libs/prisma";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  headers();
  const result = await prisma.foods.findMany({ include: { category: true } });
  return NextResponse.json(result);
};

export const POST = async (req: NextRequest) => {
  const { categoryId, ...restBody }: Prisma.FoodsUncheckedCreateInput =
    await req.json();

  const result = await prisma.foods.create({
    data: {
      ...restBody,
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    include: {
      category: true,
    },
  });
  return NextResponse.json(result);
};
