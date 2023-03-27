<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230326165330 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE option_images (id INT AUTO_INCREMENT NOT NULL, option_name_id INT DEFAULT NULL, option_image VARCHAR(255) DEFAULT NULL, INDEX IDX_A34FBCBD69E38BA3 (option_name_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE option_images ADD CONSTRAINT FK_A34FBCBD69E38BA3 FOREIGN KEY (option_name_id) REFERENCES options (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE option_images DROP FOREIGN KEY FK_A34FBCBD69E38BA3');
        $this->addSql('DROP TABLE option_images');
    }
}
