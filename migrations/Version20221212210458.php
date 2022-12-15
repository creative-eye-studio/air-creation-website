<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221212210458 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors ADD product_id_id INT DEFAULT NULL, ADD motor_name VARCHAR(255) NOT NULL, ADD motor_block_1_image VARCHAR(255) DEFAULT NULL, ADD motor_block_1_name VARCHAR(255) DEFAULT NULL, ADD motor_block_1_value VARCHAR(255) DEFAULT NULL, ADD motor_block_2_image VARCHAR(255) DEFAULT NULL, ADD motor_block_2_title VARCHAR(255) DEFAULT NULL, ADD motor_block_2_value VARCHAR(255) DEFAULT NULL, ADD motor_block_3_image VARCHAR(255) DEFAULT NULL, ADD motor_block_3_title VARCHAR(255) DEFAULT NULL, ADD motor_block_3_value VARCHAR(255) DEFAULT NULL, ADD motor_block_4_image VARCHAR(255) DEFAULT NULL, ADD motor_block_4_title VARCHAR(255) DEFAULT NULL, ADD motor_block_4_value VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE products_motors ADD CONSTRAINT FK_EB2A56B5DE18E50B FOREIGN KEY (product_id_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_EB2A56B5DE18E50B ON products_motors (product_id_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_motors DROP FOREIGN KEY FK_EB2A56B5DE18E50B');
        $this->addSql('DROP INDEX IDX_EB2A56B5DE18E50B ON products_motors');
        $this->addSql('ALTER TABLE products_motors DROP product_id_id, DROP motor_name, DROP motor_block_1_image, DROP motor_block_1_name, DROP motor_block_1_value, DROP motor_block_2_image, DROP motor_block_2_title, DROP motor_block_2_value, DROP motor_block_3_image, DROP motor_block_3_title, DROP motor_block_3_value, DROP motor_block_4_image, DROP motor_block_4_title, DROP motor_block_4_value');
    }
}
