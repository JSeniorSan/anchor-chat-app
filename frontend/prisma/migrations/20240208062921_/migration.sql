/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friend_userId_key" ON "Friend"("userId");
