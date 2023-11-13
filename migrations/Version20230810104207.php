<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230810104207 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_colors DROP FOREIGN KEY FK_448D48B54584665A');
        $this->addSql('ALTER TABLE products_images DROP FOREIGN KEY FK_662C3540295A716C');
        $this->addSql('ALTER TABLE products_motors DROP FOREIGN KEY FK_EB2A56B5DE18E50B');
        $this->addSql('DROP TABLE products_colors');
        $this->addSql('DROP TABLE products_images');
        $this->addSql('DROP TABLE products_motors');
        $this->addSql('ALTER TABLE products DROP product_lang, DROP product_logo_main, DROP product_logo_second, DROP product_intro, DROP product_desc, DROP product_capacity, DROP product_wing, DROP product_tricycle, DROP product_dim, DROP product_meta_title, DROP product_meta_desc, DROP product_slug, DROP product_id, DROP product_main_thumb, DROP product_second_thumb');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_colors (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, color VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, image VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX UNIQ_448D48B54584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE products_images (id INT AUTO_INCREMENT NOT NULL, image_product_id INT DEFAULT NULL, image_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, image_type INT NOT NULL, INDEX IDX_662C3540295A716C (image_product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE products_motors (id INT AUTO_INCREMENT NOT NULL, product_id_id INT DEFAULT NULL, motor_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_1_image VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_1_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_1_value VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_2_image VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_2_title VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_2_value VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_3_image VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_3_title VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_3_value VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_4_image VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_4_title VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_block_4_value VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_infos_vitesse VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_infos_vol VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_infos_hauteur VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_infos_masse VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_infos_moteur VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_infos_reservoir VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, motor_main_image VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_EB2A56B5DE18E50B (product_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE products_colors ADD CONSTRAINT FK_448D48B54584665A FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE products_images ADD CONSTRAINT FK_662C3540295A716C FOREIGN KEY (image_product_id) REFERENCES products (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE products_motors ADD CONSTRAINT FK_EB2A56B5DE18E50B FOREIGN KEY (product_id_id) REFERENCES products (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE products ADD product_lang VARCHAR(255) DEFAULT NULL, ADD product_logo_main VARCHAR(255) NOT NULL, ADD product_logo_second VARCHAR(255) DEFAULT NULL, ADD product_intro LONGTEXT DEFAULT NULL, ADD product_desc LONGTEXT NOT NULL, ADD product_capacity VARCHAR(255) NOT NULL, ADD product_wing VARCHAR(255) NOT NULL, ADD product_tricycle VARCHAR(255) NOT NULL, ADD product_dim VARCHAR(255) DEFAULT NULL, ADD product_meta_title VARCHAR(255) DEFAULT NULL, ADD product_meta_desc VARCHAR(255) DEFAULT NULL, ADD product_slug VARCHAR(255) NOT NULL, ADD product_id VARCHAR(255) NOT NULL, ADD product_main_thumb VARCHAR(255) NOT NULL, ADD product_second_thumb VARCHAR(255) NOT NULL');
    }
}
