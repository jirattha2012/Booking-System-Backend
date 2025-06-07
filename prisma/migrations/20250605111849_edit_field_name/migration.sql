/*
  Warnings:

  - You are about to drop the column `profileId` on the `landmark` table. All the data in the column will be lost.
  - Added the required column `profile_id` to the `Landmark` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `landmark` DROP FOREIGN KEY `Landmark_profileId_fkey`;

-- DropIndex
DROP INDEX `Landmark_profileId_fkey` ON `landmark`;

-- AlterTable
ALTER TABLE `landmark` DROP COLUMN `profileId`,
    ADD COLUMN `profile_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Landmark` ADD CONSTRAINT `Landmark_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `Profile`(`clerk_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
