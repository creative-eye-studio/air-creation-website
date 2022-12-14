<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221211205357 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_carac DROP FOREIGN KEY FK_845B420CA060E0FD');
        $this->addSql('DROP TABLE products_carac');
        $this->addSql('ALTER TABLE products_motors ADD motor_speed VARCHAR(255) DEFAULT NULL, ADD motor_decollage VARCHAR(255) NOT NULL, ADD motor_mass VARCHAR(255) NOT NULL, ADD motor_autonomous VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_carac (id INT AUTO_INCREMENT NOT NULL, carac_id_id INT NOT NULL, carac_image VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, carac_label VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_845B420CA060E0FD (carac_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE products_carac ADD CONSTRAINT FK_845B420CA060E0FD FOREIGN KEY (carac_id_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE products_motors DROP motor_speed, DROP motor_decollage, DROP motor_mass, DROP motor_autonomous');
    }
}
