<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230212085037 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doc_categories DROP FOREIGN KEY FK_BACF9A3F035B10');
        $this->addSql('DROP INDEX IDX_BACF9A3F035B10 ON doc_categories');
        $this->addSql('ALTER TABLE doc_categories DROP doc_products_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doc_categories ADD doc_products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE doc_categories ADD CONSTRAINT FK_BACF9A3F035B10 FOREIGN KEY (doc_products_id) REFERENCES doc_products (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_BACF9A3F035B10 ON doc_categories (doc_products_id)');
    }
}
