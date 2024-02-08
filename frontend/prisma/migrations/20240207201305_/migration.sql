/*
  Warnings:

  - A unique constraint covering the columns `[friendEmail]` on the table `Friend` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Friend_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Friend_friendEmail_key" ON "Friend"("friendEmail");
