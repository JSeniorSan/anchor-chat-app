/*
  Warnings:

  - You are about to drop the `_ChatToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ChatToUser" DROP CONSTRAINT "_ChatToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChatToUser" DROP CONSTRAINT "_ChatToUser_B_fkey";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "userId" TEXT,
ALTER COLUMN "title" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "chatId" TEXT;

-- DropTable
DROP TABLE "_ChatToUser";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
