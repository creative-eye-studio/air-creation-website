<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221212205505 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors DROP FOREIGN KEY FK_EB2A56B54584665A');
        $this->addSql('DROP INDEX IDX_EB2A56B54584665A ON products_motors');
        $this->addSql('ALTER TABLE products_motors DROP product_id, DROP motor_name, DROP motor_image, DROP motor_speed, DROP motor_decollage, DROP motor_mass, DROP motor_autonomous, DROP motor_speed_decrochage, DROP motor_taux_montee, DROP motor_distance_atterissage, DROP motor_helice');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors ADD product_id INT NOT NULL, ADD motor_name VARCHAR(255) DEFAULT NULL, ADD motor_image VARCHAR(255) DEFAULT NULL, ADD motor_speed VARCHAR(255) DEFAULT NULL, ADD motor_decollage VARCHAR(255) NOT NULL, ADD motor_mass VARCHAR(255) NOT NULL, ADD motor_autonomous VARCHAR(255) NOT NULL, ADD motor_speed_decrochage VARCHAR(255) DEFAULT NULL, ADD motor_taux_montee VARCHAR(255) DEFAULT NULL, ADD motor_distance_atterissage VARCHAR(255) NOT NULL, ADD motor_helice VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE products_motors ADD CONSTRAINT FK_EB2A56B54584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_EB2A56B54584665A ON products_motors (product_id)');
    }
}
