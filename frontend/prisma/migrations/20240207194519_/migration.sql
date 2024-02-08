/*
  Warnings:

  - You are about to drop the column `friendId` on the `Friend` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Friend" DROP COLUMN "friendId",
ADD COLUMN     "friendEmail" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Friend_userId_key" ON "Friend"("userId");
