<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230302143859 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE options_images (id INT AUTO_INCREMENT NOT NULL, image_option_id INT DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, INDEX IDX_AF0139857F46C63B (image_option_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE options_images ADD CONSTRAINT FK_AF0139857F46C63B FOREIGN KEY (image_option_id) REFERENCES options (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE options_images DROP FOREIGN KEY FK_AF0139857F46C63B');
        $this->addSql('DROP TABLE options_images');
    }
}
