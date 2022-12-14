<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221210162001 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products ADD product_logo_main VARCHAR(255) NOT NULL, ADD product_logo_second VARCHAR(255) DEFAULT NULL, ADD product_desc VARCHAR(255) NOT NULL, ADD product_capacity VARCHAR(255) NOT NULL, ADD product_wing VARCHAR(255) NOT NULL, ADD product_tricycle VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products DROP product_logo_main, DROP product_logo_second, DROP product_desc, DROP product_capacity, DROP product_wing, DROP product_tricycle');
    }
}
