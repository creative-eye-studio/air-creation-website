<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230212084738 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE doc_products (id INT AUTO_INCREMENT NOT NULL, product_name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products_colors (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, color VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_448D48B54584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_colors ADD CONSTRAINT FK_448D48B54584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE doc_categories ADD doc_products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE doc_categories ADD CONSTRAINT FK_BACF9A3F035B10 FOREIGN KEY (doc_products_id) REFERENCES doc_products (id)');
        $this->addSql('CREATE INDEX IDX_BACF9A3F035B10 ON doc_categories (doc_products_id)');
        $this->addSql('ALTER TABLE products_motors CHANGE motor_infos_vitesse motor_infos_vitesse VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_vol motor_infos_vol VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_hauteur motor_infos_hauteur VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_masse motor_infos_masse VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_moteur motor_infos_moteur VARCHAR(255) DEFAULT NULL, CHANGE motor_infos_reservoir motor_infos_reservoir VARCHAR(255) DEFAULT NULL, CHANGE motor_main_image motor_main_image VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doc_categories DROP FOREIGN KEY FK_BACF9A3F035B10');
        $this->addSql('ALTER TABLE products_colors DROP FOREIGN KEY FK_448D48B54584665A');
        $this->addSql('DROP TABLE doc_products');
        $this->addSql('DROP TABLE products_colors');
        $this->addSql('DROP INDEX IDX_BACF9A3F035B10 ON doc_categories');
        $this->addSql('ALTER TABLE doc_categories DROP doc_products_id');
        $this->addSql('ALTER TABLE products_motors CHANGE motor_infos_vitesse motor_infos_vitesse TEXT DEFAULT NULL, CHANGE motor_infos_vol motor_infos_vol TEXT DEFAULT NULL, CHANGE motor_infos_hauteur motor_infos_hauteur TEXT DEFAULT NULL, CHANGE motor_infos_masse motor_infos_masse TEXT DEFAULT NULL, CHANGE motor_infos_moteur motor_infos_moteur TEXT DEFAULT NULL, CHANGE motor_infos_reservoir motor_infos_reservoir TEXT DEFAULT NULL, CHANGE motor_main_image motor_main_image TEXT DEFAULT NULL');
    }
}
