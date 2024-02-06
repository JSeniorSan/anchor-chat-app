/*
  Warnings:

  - You are about to drop the column `userId` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `chatId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_chatId_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "chatId";

-- CreateTable
CREATE TABLE "_ChatToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChatToUser_AB_unique" ON "_ChatToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatToUser_B_index" ON "_ChatToUser"("B");

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD CONSTRAINT "_ChatToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD CONSTRAINT "_ChatToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
