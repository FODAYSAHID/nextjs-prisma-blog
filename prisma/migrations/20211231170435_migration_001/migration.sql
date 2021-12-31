-- AlterTable
ALTER TABLE `Post` MODIFY `title` VARCHAR(1000) NOT NULL,
    MODIFY `featuredImage` VARCHAR(255) NOT NULL,
    MODIFY `content` TEXT NULL;
