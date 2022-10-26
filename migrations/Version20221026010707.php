<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221026010707 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products ADD product_envergure DOUBLE PRECISION NOT NULL, ADD product_surface_alaire DOUBLE PRECISION NOT NULL, ADD product_surface DOUBLE PRECISION NOT NULL, ADD product_charge DOUBLE PRECISION NOT NULL, ADD product_masse DOUBLE PRECISION NOT NULL, ADD product_masse_max DOUBLE PRECISION NOT NULL, ADD product_motor_type VARCHAR(255) NOT NULL, ADD product_motor_pouls DOUBLE PRECISION NOT NULL, ADD product_speed_min DOUBLE PRECISION NOT NULL, ADD product_speed_max DOUBLE PRECISION NOT NULL, ADD product_elec_conso DOUBLE PRECISION NOT NULL, ADD product_fly_dist DOUBLE PRECISION NOT NULL, ADD product_color VARCHAR(255) NOT NULL, DROP product_shop_url, DROP product_doc_url');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products ADD product_shop_url VARCHAR(255) DEFAULT NULL, ADD product_doc_url VARCHAR(255) DEFAULT NULL, DROP product_envergure, DROP product_surface_alaire, DROP product_surface, DROP product_charge, DROP product_masse, DROP product_masse_max, DROP product_motor_type, DROP product_motor_pouls, DROP product_speed_min, DROP product_speed_max, DROP product_elec_conso, DROP product_fly_dist, DROP product_color');
    }
}
