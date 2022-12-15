<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221212211057 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors ADD motor_infos_vitesse VARCHAR(255) DEFAULT NULL, ADD motor_infos_vol VARCHAR(255) DEFAULT NULL, ADD motor_infos_hauteur VARCHAR(255) DEFAULT NULL, ADD motor_infos_masse VARCHAR(255) DEFAULT NULL, ADD infos_motor_moteur VARCHAR(255) DEFAULT NULL, ADD motor_infos_reservoir VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors DROP motor_infos_vitesse, DROP motor_infos_vol, DROP motor_infos_hauteur, DROP motor_infos_masse, DROP infos_motor_moteur, DROP motor_infos_reservoir');
    }
}
