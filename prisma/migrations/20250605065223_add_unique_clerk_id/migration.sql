/*
  Warnings:

  - A unique constraint covering the columns `[clerk_id]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Profile_clerk_id_key` ON `Profile`(`clerk_id`);
