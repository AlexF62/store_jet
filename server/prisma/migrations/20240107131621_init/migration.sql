/*
  Warnings:

  - A unique constraint covering the columns `[secondName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "total" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "secondName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_secondName_key" ON "User"("secondName");
