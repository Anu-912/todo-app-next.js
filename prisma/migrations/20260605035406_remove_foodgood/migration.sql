/*
  Warnings:

  - You are about to drop the column `userpassword` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Foods" ADD COLUMN     "foodDescription" TEXT;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "userpassword",
ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpTries" INTEGER NOT NULL DEFAULT 0;
