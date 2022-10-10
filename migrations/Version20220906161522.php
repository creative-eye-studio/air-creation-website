<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220906161522 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE savmanager (id INT AUTO_INCREMENT NOT NULL, lname VARCHAR(255) NOT NULL, fname VARCHAR(255) NOT NULL, society VARCHAR(255) DEFAULT NULL, adress_1 VARCHAR(255) NOT NULL, adress_2 VARCHAR(255) DEFAULT NULL, postcode VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, phone_1 VARCHAR(255) NOT NULL, phone_2 VARCHAR(255) DEFAULT NULL, mail_adress VARCHAR(255) NOT NULL, product VARCHAR(255) NOT NULL, product_custom VARCHAR(255) DEFAULT NULL, serial_number VARCHAR(255) DEFAULT NULL, invoice_date DATE NOT NULL, invoice_number VARCHAR(255) DEFAULT NULL, guarantee TINYINT(1) NOT NULL, description LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE savmanager');
    }
}
