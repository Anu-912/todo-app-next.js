// libs/prisma.ts
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import path from "path";
import { PrismaClient } from "@/app/generated/prisma/client";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const rawConnectionString =
  process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL;

if (!rawConnectionString) {
  throw new Error(
    "CRITICAL SECURITY ERROR: DATABASE_URL is missing from your local .env file!",
  );
}

// FORCE CLEAN: This drops everything after the core URL path (removes ?, &, etc.)
const connectionString = rawConnectionString.split("?")[0];

const pool = new Pool({
  connectionString: connectionString,
  ssl: true,
});

const adapter = new PrismaPg(pool);
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
