<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221211070428 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_carac (id INT AUTO_INCREMENT NOT NULL, carac_id_id INT NOT NULL, carac_image VARCHAR(255) NOT NULL, carac_label VARCHAR(255) NOT NULL, INDEX IDX_845B420CA060E0FD (carac_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products_colors (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, color VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_448D48B54584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_carac ADD CONSTRAINT FK_845B420CA060E0FD FOREIGN KEY (carac_id_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE products_colors ADD CONSTRAINT FK_448D48B54584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE products_motors ADD product_id INT NOT NULL');
        $this->addSql('ALTER TABLE products_motors ADD CONSTRAINT FK_EB2A56B54584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_EB2A56B54584665A ON products_motors (product_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_carac DROP FOREIGN KEY FK_845B420CA060E0FD');
        $this->addSql('ALTER TABLE products_colors DROP FOREIGN KEY FK_448D48B54584665A');
        $this->addSql('DROP TABLE products_carac');
        $this->addSql('DROP TABLE products_colors');
        $this->addSql('ALTER TABLE products_motors DROP FOREIGN KEY FK_EB2A56B54584665A');
        $this->addSql('DROP INDEX IDX_EB2A56B54584665A ON products_motors');
        $this->addSql('ALTER TABLE products_motors DROP product_id');
    }
}
