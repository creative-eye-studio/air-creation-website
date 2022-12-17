<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221217130848 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE doc_categories (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE documentation DROP FOREIGN KEY FK_73D5A93B8D1998B9');
        $this->addSql('DROP TABLE documentation');
        $this->addSql('ALTER TABLE products CHANGE product_desc product_desc LONGTEXT NOT NULL, CHANGE product_meta_desc product_meta_desc VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE products_motors CHANGE motor_infos_vitesse motor_infos_vitesse VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_vol motor_infos_vol VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_hauteur motor_infos_hauteur VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_masse motor_infos_masse VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_moteur motor_infos_moteur VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_reservoir motor_infos_reservoir VARCHAR(255) DEFAULT NULL, CHANGE motor_main_image motor_main_image VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE documentation (id INT AUTO_INCREMENT NOT NULL, doc_product_id_id INT NOT NULL, doc_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, doc_file VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_73D5A93B8D1998B9 (doc_product_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE documentation ADD CONSTRAINT FK_73D5A93B8D1998B9 FOREIGN KEY (doc_product_id_id) REFERENCES products (id)');
        $this->addSql('DROP TABLE doc_categories');
        $this->addSql('ALTER TABLE products CHANGE product_desc product_desc TEXT NOT NULL, CHANGE product_meta_desc product_meta_desc TEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE products_motors CHANGE motor_infos_vitesse motor_infos_vitesse TEXT DEFAULT NULL, CHANGE motor_infos_vol motor_infos_vol TEXT DEFAULT NULL, CHANGE motor_infos_hauteur motor_infos_hauteur TEXT DEFAULT NULL, CHANGE motor_infos_masse motor_infos_masse TEXT DEFAULT NULL, CHANGE motor_infos_moteur motor_infos_moteur TEXT DEFAULT NULL, CHANGE motor_infos_reservoir motor_infos_reservoir TEXT DEFAULT NULL, CHANGE motor_main_image motor_main_image TEXT DEFAULT NULL');
    }
}
