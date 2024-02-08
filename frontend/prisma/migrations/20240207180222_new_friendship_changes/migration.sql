/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Friend` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Friend_userEmail_key";

-- AlterTable
ALTER TABLE "Friend" DROP COLUMN "userEmail";
