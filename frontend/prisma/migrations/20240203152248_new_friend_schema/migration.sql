/*
  Warnings:

  - You are about to drop the column `session` on the `Friend` table. All the data in the column will be lost.
  - You are about to drop the column `currentSession` on the `User` table. All the data in the column will be lost.
  - Added the required column `friendId` to the `Friend` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Friend" DROP COLUMN "session",
ADD COLUMN     "friendId" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "currentSession",
ADD COLUMN     "status" BOOLEAN;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
