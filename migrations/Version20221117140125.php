<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221117140125 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_motors (id INT AUTO_INCREMENT NOT NULL, motor_product_id INT NOT NULL, motor_name VARCHAR(255) NOT NULL, INDEX IDX_EB2A56B5957F0965 (motor_product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_motors ADD CONSTRAINT FK_EB2A56B5957F0965 FOREIGN KEY (motor_product_id) REFERENCES products (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors DROP FOREIGN KEY FK_EB2A56B5957F0965');
        $this->addSql('DROP TABLE products_motors');
    }
}
