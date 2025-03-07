/*
  Warnings:

  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE IF EXISTS `Collection`;

-- CreateTable
CREATE TABLE `Todos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    CONSTRAINT `Todos_pkey` PRIMARY KEY (`id`)
);
