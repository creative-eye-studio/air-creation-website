<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221120210502 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE products_carac (id INT AUTO_INCREMENT NOT NULL, carac_id_id INT NOT NULL, carac_image VARCHAR(255) NOT NULL, carac_label VARCHAR(255) NOT NULL, INDEX IDX_845B420CA060E0FD (carac_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_carac ADD CONSTRAINT FK_845B420CA060E0FD FOREIGN KEY (carac_id_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE products ADD product_carac_1 VARCHAR(255) DEFAULT NULL, ADD product_carac_2 VARCHAR(255) DEFAULT NULL, ADD product_carac_3 VARCHAR(255) DEFAULT NULL, ADD product_carac_4 VARCHAR(255) DEFAULT NULL, ADD product_carac_5 VARCHAR(255) DEFAULT NULL, ADD product_carac_6 VARCHAR(255) DEFAULT NULL, ADD product_carac_7 VARCHAR(255) DEFAULT NULL, ADD product_carac_8 VARCHAR(255) DEFAULT NULL, ADD product_carac_9 VARCHAR(255) DEFAULT NULL, ADD product_carac_10 VARCHAR(255) DEFAULT NULL, ADD product_carac_11 VARCHAR(255) DEFAULT NULL, ADD product_carac_12 VARCHAR(255) DEFAULT NULL, ADD product_carac_13 VARCHAR(255) DEFAULT NULL, ADD product_carac_14 VARCHAR(255) DEFAULT NULL, ADD product_carac_15 VARCHAR(255) DEFAULT NULL, ADD product_carac_16 VARCHAR(255) DEFAULT NULL, ADD product_carac_17 VARCHAR(255) DEFAULT NULL, ADD product_carac_18 VARCHAR(255) DEFAULT NULL, ADD product_carac_19 VARCHAR(255) DEFAULT NULL, ADD product_carac_20 VARCHAR(255) DEFAULT NULL, ADD product_carac_21 VARCHAR(255) DEFAULT NULL, ADD product_carac_22 VARCHAR(255) DEFAULT NULL, ADD product_carac_23 VARCHAR(255) DEFAULT NULL, ADD product_carac_24 VARCHAR(255) DEFAULT NULL, ADD product_carac_25 VARCHAR(255) DEFAULT NULL, ADD product_carac_26 VARCHAR(255) DEFAULT NULL, ADD product_carac_27 VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products_carac DROP FOREIGN KEY FK_845B420CA060E0FD');
        $this->addSql('DROP TABLE products_carac');
        $this->addSql('ALTER TABLE products DROP product_carac_1, DROP product_carac_2, DROP product_carac_3, DROP product_carac_4, DROP product_carac_5, DROP product_carac_6, DROP product_carac_7, DROP product_carac_8, DROP product_carac_9, DROP product_carac_10, DROP product_carac_11, DROP product_carac_12, DROP product_carac_13, DROP product_carac_14, DROP product_carac_15, DROP product_carac_16, DROP product_carac_17, DROP product_carac_18, DROP product_carac_19, DROP product_carac_20, DROP product_carac_21, DROP product_carac_22, DROP product_carac_23, DROP product_carac_24, DROP product_carac_25, DROP product_carac_26, DROP product_carac_27');
    }
}
