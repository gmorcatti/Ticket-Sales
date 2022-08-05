/*
  Warnings:

  - Added the required column `ticketValue` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `details` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "ticketValue" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
