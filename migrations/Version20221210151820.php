<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221210151820 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products DROP product_url, DROP product_old, DROP product_thumb, DROP product_thumb_hover, DROP product_meta_title, DROP product_meta_desc, DROP product_id, DROP product_capacity, DROP product_wing, DROP product_tricycle, DROP product_max_speed, DROP product_stall_speed, DROP product_mass_speed, DROP product_consumption, DROP product_motor_1, DROP product_motor_img_1, DROP product_motor_2, DROP product_motor_img_2, DROP product_motor_3, DROP product_motor_img_3, DROP product_carac_1, DROP product_carac_2, DROP product_carac_3, DROP product_carac_4, DROP product_carac_5, DROP product_carac_6, DROP product_carac_7, DROP product_carac_8, DROP product_carac_9, DROP product_carac_10, DROP product_carac_11, DROP product_carac_12, DROP product_carac_13, DROP product_carac_14, DROP product_carac_15, DROP product_carac_16, DROP product_carac_17, DROP product_carac_18, DROP product_carac_19, DROP product_carac_20, DROP product_carac_21, DROP product_carac_22, DROP product_carac_23, DROP product_carac_25, DROP product_carac_26, DROP product_carac_27, DROP product_dim_image, DROP product_logo, DROP product_carac_28, DROP product_carac_29');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products ADD product_url VARCHAR(255) NOT NULL, ADD product_old TINYINT(1) NOT NULL, ADD product_thumb VARCHAR(255) NOT NULL, ADD product_thumb_hover VARCHAR(255) NOT NULL, ADD product_meta_title VARCHAR(255) DEFAULT NULL, ADD product_meta_desc LONGTEXT DEFAULT NULL, ADD product_id VARCHAR(255) NOT NULL, ADD product_capacity VARCHAR(255) NOT NULL, ADD product_wing VARCHAR(255) NOT NULL, ADD product_tricycle VARCHAR(255) NOT NULL, ADD product_max_speed VARCHAR(255) DEFAULT NULL, ADD product_stall_speed VARCHAR(255) DEFAULT NULL, ADD product_mass_speed VARCHAR(255) DEFAULT NULL, ADD product_consumption VARCHAR(255) DEFAULT NULL, ADD product_motor_1 VARCHAR(255) DEFAULT NULL, ADD product_motor_img_1 VARCHAR(255) DEFAULT NULL, ADD product_motor_2 VARCHAR(255) DEFAULT NULL, ADD product_motor_img_2 VARCHAR(255) DEFAULT NULL, ADD product_motor_3 VARCHAR(255) DEFAULT NULL, ADD product_motor_img_3 VARCHAR(255) DEFAULT NULL, ADD product_carac_1 VARCHAR(255) DEFAULT NULL, ADD product_carac_2 VARCHAR(255) DEFAULT NULL, ADD product_carac_3 VARCHAR(255) DEFAULT NULL, ADD product_carac_4 VARCHAR(255) DEFAULT NULL, ADD product_carac_5 VARCHAR(255) DEFAULT NULL, ADD product_carac_6 VARCHAR(255) DEFAULT NULL, ADD product_carac_7 VARCHAR(255) DEFAULT NULL, ADD product_carac_8 VARCHAR(255) DEFAULT NULL, ADD product_carac_9 VARCHAR(255) DEFAULT NULL, ADD product_carac_10 VARCHAR(255) DEFAULT NULL, ADD product_carac_11 VARCHAR(255) DEFAULT NULL, ADD product_carac_12 VARCHAR(255) DEFAULT NULL, ADD product_carac_13 VARCHAR(255) DEFAULT NULL, ADD product_carac_14 VARCHAR(255) DEFAULT NULL, ADD product_carac_15 VARCHAR(255) DEFAULT NULL, ADD product_carac_16 VARCHAR(255) DEFAULT NULL, ADD product_carac_17 VARCHAR(255) DEFAULT NULL, ADD product_carac_18 VARCHAR(255) DEFAULT NULL, ADD product_carac_19 VARCHAR(255) DEFAULT NULL, ADD product_carac_20 VARCHAR(255) DEFAULT NULL, ADD product_carac_21 VARCHAR(255) DEFAULT NULL, ADD product_carac_22 VARCHAR(255) DEFAULT NULL, ADD product_carac_23 VARCHAR(255) DEFAULT NULL, ADD product_carac_25 VARCHAR(255) DEFAULT NULL, ADD product_carac_26 VARCHAR(255) DEFAULT NULL, ADD product_carac_27 VARCHAR(255) DEFAULT NULL, ADD product_dim_image VARCHAR(255) DEFAULT NULL, ADD product_logo VARCHAR(255) NOT NULL, ADD product_carac_28 VARCHAR(255) DEFAULT NULL, ADD product_carac_29 VARCHAR(255) DEFAULT NULL');
    }
}
