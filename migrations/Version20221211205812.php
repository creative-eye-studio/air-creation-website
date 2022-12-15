<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221211205812 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors ADD motor_speed_decrochage VARCHAR(255) DEFAULT NULL, ADD motor_taux_montee VARCHAR(255) DEFAULT NULL, ADD motor_distance_atterissage VARCHAR(255) NOT NULL, ADD motor_helice VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors DROP motor_speed_decrochage, DROP motor_taux_montee, DROP motor_distance_atterissage, DROP motor_helice');
    }
}
