-- DropIndex
DROP INDEX "Friend_userId_key";

-- AlterTable
ALTER TABLE "Friend" ADD COLUMN     "friendId" TEXT;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
