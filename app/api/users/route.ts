import { Prisma } from "@/app/generated/prisma/client";
import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
};

export const POST = async (req: NextRequest) => {
  const data: Prisma.UsersCreateInput = await req.json();
  const newUser = await prisma.users.create({
    data: data,
  });

  return NextResponse.json(newUser);
};
