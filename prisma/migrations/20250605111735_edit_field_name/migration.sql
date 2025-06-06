/*
  Warnings:

  - The primary key for the `profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `profile` table. All the data in the column will be lost.
  - Added the required column `profile_id` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `profile_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`profile_id`);
