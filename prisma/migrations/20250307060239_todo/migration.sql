/*
  Warnings:

  - You are about to alter the column `name` on the `Todos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Todos` MODIFY `name` VARCHAR(191) NOT NULL;
