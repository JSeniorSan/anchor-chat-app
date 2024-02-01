-- CreateTable
CREATE TABLE "Friend" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT,
    "session" TEXT,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friend_email_key" ON "Friend"("email");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
