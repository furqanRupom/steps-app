/*
  Warnings:

  - You are about to drop the column `Address` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `ProfilePhoto` on the `members` table. All the data in the column will be lost.
  - Added the required column `address` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePhoto` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "Address",
DROP COLUMN "ProfilePhoto",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "profilePhoto" TEXT NOT NULL;
