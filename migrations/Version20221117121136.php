<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221117121136 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_carac (id INT AUTO_INCREMENT NOT NULL, carac_id_id INT NOT NULL, carac_image VARCHAR(255) NOT NULL, carac_label VARCHAR(255) NOT NULL, INDEX IDX_845B420CA060E0FD (carac_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_carac ADD CONSTRAINT FK_845B420CA060E0FD FOREIGN KEY (carac_id_id) REFERENCES products (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_carac DROP FOREIGN KEY FK_845B420CA060E0FD');
        $this->addSql('DROP TABLE products_carac');
    }
}
