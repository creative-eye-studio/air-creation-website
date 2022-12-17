<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221217171812 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doc_categories ADD old_product TINYINT(1) NOT NULL, ADD wing VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE products CHANGE product_desc product_desc LONGTEXT NOT NULL, CHANGE product_meta_desc product_meta_desc VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE products_motors CHANGE motor_infos_vitesse motor_infos_vitesse VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_vol motor_infos_vol VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_hauteur motor_infos_hauteur VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_masse motor_infos_masse VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_moteur motor_infos_moteur VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_reservoir motor_infos_reservoir VARCHAR(255) DEFAULT NULL, CHANGE motor_main_image motor_main_image VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doc_categories DROP old_product, DROP wing');
        $this->addSql('ALTER TABLE products CHANGE product_desc product_desc TEXT NOT NULL, CHANGE product_meta_desc product_meta_desc TEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE products_motors CHANGE motor_infos_vitesse motor_infos_vitesse TEXT DEFAULT NULL, CHANGE motor_infos_vol motor_infos_vol TEXT DEFAULT NULL, CHANGE motor_infos_hauteur motor_infos_hauteur TEXT DEFAULT NULL, CHANGE motor_infos_masse motor_infos_masse TEXT DEFAULT NULL, CHANGE motor_infos_moteur motor_infos_moteur TEXT DEFAULT NULL, CHANGE motor_infos_reservoir motor_infos_reservoir TEXT DEFAULT NULL, CHANGE motor_main_image motor_main_image TEXT DEFAULT NULL');
    }
}
