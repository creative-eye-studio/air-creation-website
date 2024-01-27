<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240127120820 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_colors (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, color VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_448D48B54584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products_motors (id INT AUTO_INCREMENT NOT NULL, product_id_id INT DEFAULT NULL, motor_name VARCHAR(255) DEFAULT NULL, motor_block_1_image VARCHAR(255) DEFAULT NULL, motor_block_1_name VARCHAR(255) DEFAULT NULL, motor_block_1_value VARCHAR(255) DEFAULT NULL, motor_block_2_image VARCHAR(255) DEFAULT NULL, motor_block_2_title VARCHAR(255) DEFAULT NULL, motor_block_2_value VARCHAR(255) DEFAULT NULL, motor_block_3_image VARCHAR(255) DEFAULT NULL, motor_block_3_title VARCHAR(255) DEFAULT NULL, motor_block_3_value VARCHAR(255) DEFAULT NULL, motor_block_4_image VARCHAR(255) DEFAULT NULL, motor_block_4_title VARCHAR(255) DEFAULT NULL, motor_block_4_value VARCHAR(255) DEFAULT NULL, motor_infos_vitesse VARCHAR(255) DEFAULT NULL, motor_infos_vol VARCHAR(255) DEFAULT NULL, motor_infos_hauteur VARCHAR(255) DEFAULT NULL, motor_infos_masse VARCHAR(255) DEFAULT NULL, motor_infos_moteur VARCHAR(255) DEFAULT NULL, motor_infos_reservoir VARCHAR(255) DEFAULT NULL, motor_main_image VARCHAR(255) DEFAULT NULL, INDEX IDX_EB2A56B5DE18E50B (product_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_colors ADD CONSTRAINT FK_448D48B54584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE products_motors ADD CONSTRAINT FK_EB2A56B5DE18E50B FOREIGN KEY (product_id_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE menu_link DROP FOREIGN KEY FK_FEE369BF257F1FCF');
        $this->addSql('ALTER TABLE menu_link DROP FOREIGN KEY FK_FEE369BF4B89032C');
        $this->addSql('ALTER TABLE menu_link DROP FOREIGN KEY FK_FEE369BF727ACA70');
        $this->addSql('ALTER TABLE menu_link DROP FOREIGN KEY FK_FEE369BFC4663E4');
        $this->addSql('ALTER TABLE menu_link DROP FOREIGN KEY FK_FEE369BFCCD7E912');
        $this->addSql('ALTER TABLE reset_password_request DROP FOREIGN KEY FK_7CE748AA76ED395');
        $this->addSql('DROP TABLE emails_list');
        $this->addSql('DROP TABLE global_settings');
        $this->addSql('DROP TABLE menu');
        $this->addSql('DROP TABLE menu_link');
        $this->addSql('DROP TABLE reset_password_request');
        $this->addSql('ALTER TABLE pages_list ADD page_meta_title_en VARCHAR(255) DEFAULT NULL, ADD page_meta_desc_en LONGTEXT DEFAULT NULL, DROP status, DROP page_content, CHANGE page_name page_name VARCHAR(255) NOT NULL, CHANGE page_meta_title page_meta_title VARCHAR(255) DEFAULT NULL, CHANGE page_meta_desc page_meta_desc LONGTEXT DEFAULT NULL, CHANGE page_model page_model INT NOT NULL');
        $this->addSql('ALTER TABLE posts_list DROP FOREIGN KEY FK_FE98C1A1F675F31B');
        $this->addSql('DROP INDEX IDX_FE98C1A1F675F31B ON posts_list');
        $this->addSql('ALTER TABLE posts_list ADD post_id VARCHAR(255) NOT NULL, ADD photo_filename VARCHAR(255) NOT NULL, ADD post_meta_desc_en VARCHAR(255) DEFAULT NULL, DROP author_id, DROP post_content, DROP online, DROP updated_at, CHANGE post_name post_name VARCHAR(255) NOT NULL, CHANGE post_meta_title post_meta_title VARCHAR(255) DEFAULT NULL, CHANGE post_meta_desc post_meta_desc VARCHAR(255) DEFAULT NULL, CHANGE post_thumb post_meta_title_en VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE products ADD product_desc LONGTEXT NOT NULL, ADD product_capacity VARCHAR(255) NOT NULL, ADD product_wing VARCHAR(255) NOT NULL, ADD product_tricycle VARCHAR(255) NOT NULL, ADD product_dim VARCHAR(255) DEFAULT NULL, ADD product_meta_title VARCHAR(255) DEFAULT NULL, ADD product_meta_desc VARCHAR(255) DEFAULT NULL, ADD product_slug VARCHAR(255) NOT NULL, ADD product_id VARCHAR(255) NOT NULL, ADD product_main_thumb VARCHAR(255) NOT NULL, ADD product_second_thumb VARCHAR(255) NOT NULL, ADD product_intro LONGTEXT DEFAULT NULL, ADD product_lang VARCHAR(255) DEFAULT NULL, DROP logos, DROP thumbs, DROP intro, CHANGE slug product_logo_main VARCHAR(255) NOT NULL, CHANGE bg_image product_logo_second VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE products_images DROP FOREIGN KEY FK_662C35404584665A');
        $this->addSql('DROP INDEX IDX_662C35404584665A ON products_images');
        $this->addSql('ALTER TABLE products_images CHANGE product_id image_product_id INT DEFAULT NULL, CHANGE name image_name VARCHAR(255) NOT NULL, CHANGE album image_type INT NOT NULL');
        $this->addSql('ALTER TABLE products_images ADD CONSTRAINT FK_662C3540295A716C FOREIGN KEY (image_product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_662C3540295A716C ON products_images (image_product_id)');
        $this->addSql('ALTER TABLE user DROP is_verified');
        $this->addSql('ALTER TABLE messenger_messages CHANGE created_at created_at DATETIME NOT NULL, CHANGE available_at available_at DATETIME NOT NULL, CHANGE delivered_at delivered_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE emails_list (id INT AUTO_INCREMENT NOT NULL, email_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, email_id VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE global_settings (id INT AUTO_INCREMENT NOT NULL, damping DOUBLE PRECISION DEFAULT NULL, scrollimg DOUBLE PRECISION DEFAULT NULL, logo VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE menu (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, pos INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE menu_link (id INT AUTO_INCREMENT NOT NULL, menu_id INT DEFAULT NULL, page_id INT DEFAULT NULL, post_id INT DEFAULT NULL, parent_id INT DEFAULT NULL, menu_link_id INT DEFAULT NULL, order_link INT NOT NULL, cus_name JSON DEFAULT NULL, cus_link JSON DEFAULT NULL, blank TINYINT(1) DEFAULT NULL, INDEX IDX_FEE369BF257F1FCF (menu_link_id), INDEX IDX_FEE369BF4B89032C (post_id), INDEX IDX_FEE369BF727ACA70 (parent_id), INDEX IDX_FEE369BFC4663E4 (page_id), INDEX IDX_FEE369BFCCD7E912 (menu_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE reset_password_request (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, selector VARCHAR(20) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, hashed_token VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, requested_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', expires_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_7CE748AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE menu_link ADD CONSTRAINT FK_FEE369BF257F1FCF FOREIGN KEY (menu_link_id) REFERENCES menu_link (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE menu_link ADD CONSTRAINT FK_FEE369BF4B89032C FOREIGN KEY (post_id) REFERENCES posts_list (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE menu_link ADD CONSTRAINT FK_FEE369BF727ACA70 FOREIGN KEY (parent_id) REFERENCES menu_link (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE menu_link ADD CONSTRAINT FK_FEE369BFC4663E4 FOREIGN KEY (page_id) REFERENCES pages_list (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE menu_link ADD CONSTRAINT FK_FEE369BFCCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE products_colors DROP FOREIGN KEY FK_448D48B54584665A');
        $this->addSql('ALTER TABLE products_motors DROP FOREIGN KEY FK_EB2A56B5DE18E50B');
        $this->addSql('DROP TABLE products_colors');
        $this->addSql('DROP TABLE products_motors');
        $this->addSql('ALTER TABLE messenger_messages CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE available_at available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE delivered_at delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE pages_list ADD status TINYINT(1) NOT NULL, ADD page_content JSON DEFAULT NULL, DROP page_meta_title_en, DROP page_meta_desc_en, CHANGE page_name page_name JSON NOT NULL, CHANGE page_model page_model TINYINT(1) DEFAULT NULL, CHANGE page_meta_title page_meta_title JSON DEFAULT NULL, CHANGE page_meta_desc page_meta_desc JSON NOT NULL');
        $this->addSql('ALTER TABLE posts_list ADD author_id INT NOT NULL, ADD post_content JSON NOT NULL, ADD post_thumb VARCHAR(255) DEFAULT NULL, ADD online TINYINT(1) DEFAULT NULL, ADD updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', DROP post_id, DROP photo_filename, DROP post_meta_title_en, DROP post_meta_desc_en, CHANGE post_name post_name JSON NOT NULL, CHANGE post_meta_title post_meta_title JSON NOT NULL, CHANGE post_meta_desc post_meta_desc JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE posts_list ADD CONSTRAINT FK_FE98C1A1F675F31B FOREIGN KEY (author_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_FE98C1A1F675F31B ON posts_list (author_id)');
        $this->addSql('ALTER TABLE products ADD logos JSON DEFAULT NULL, ADD thumbs JSON DEFAULT NULL, ADD bg_image VARCHAR(255) DEFAULT NULL, ADD intro JSON NOT NULL, ADD slug VARCHAR(255) NOT NULL, DROP product_logo_main, DROP product_logo_second, DROP product_desc, DROP product_capacity, DROP product_wing, DROP product_tricycle, DROP product_dim, DROP product_meta_title, DROP product_meta_desc, DROP product_slug, DROP product_id, DROP product_main_thumb, DROP product_second_thumb, DROP product_intro, DROP product_lang');
        $this->addSql('ALTER TABLE products_images DROP FOREIGN KEY FK_662C3540295A716C');
        $this->addSql('DROP INDEX IDX_662C3540295A716C ON products_images');
        $this->addSql('ALTER TABLE products_images CHANGE image_product_id product_id INT DEFAULT NULL, CHANGE image_type album INT NOT NULL, CHANGE image_name name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE products_images ADD CONSTRAINT FK_662C35404584665A FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_662C35404584665A ON products_images (product_id)');
        $this->addSql('ALTER TABLE user ADD is_verified TINYINT(1) NOT NULL');
    }
}
