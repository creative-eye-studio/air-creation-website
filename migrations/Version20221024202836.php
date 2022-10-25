<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221024202836 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_images (id INT AUTO_INCREMENT NOT NULL, image_product_id INT DEFAULT NULL, image_name VARCHAR(255) NOT NULL, image_type INT NOT NULL, INDEX IDX_662C3540295A716C (image_product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_images ADD CONSTRAINT FK_662C3540295A716C FOREIGN KEY (image_product_id) REFERENCES products (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_images DROP FOREIGN KEY FK_662C3540295A716C');
        $this->addSql('DROP TABLE products_images');
    }
}
