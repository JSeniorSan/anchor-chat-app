/*
  Warnings:

  - A unique constraint covering the columns `[friendEmail]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friend_friendEmail_key" ON "Friend"("friendEmail");
