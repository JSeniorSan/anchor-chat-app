/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friend_userEmail_key" ON "Friend"("userEmail");
