<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230212100028 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE doc_categories (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, wing VARCHAR(255) DEFAULT NULL, tricycle VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE doc_files DROP FOREIGN KEY FK_69DC2D0F41CF475B');
        $this->addSql('DROP INDEX IDX_69DC2D0F41CF475B ON doc_files');
        $this->addSql('ALTER TABLE doc_files ADD doc_model_id INT DEFAULT NULL, DROP doc_category_id');
        $this->addSql('ALTER TABLE doc_files ADD CONSTRAINT FK_69DC2D0F18C1AABC FOREIGN KEY (doc_model_id) REFERENCES doc_products (id)');
        $this->addSql('CREATE INDEX IDX_69DC2D0F18C1AABC ON doc_files (doc_model_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE doc_categories');
        $this->addSql('ALTER TABLE doc_files DROP FOREIGN KEY FK_69DC2D0F18C1AABC');
        $this->addSql('DROP INDEX IDX_69DC2D0F18C1AABC ON doc_files');
        $this->addSql('ALTER TABLE doc_files ADD doc_category_id INT NOT NULL, DROP doc_model_id');
        $this->addSql('ALTER TABLE doc_files ADD CONSTRAINT FK_69DC2D0F41CF475B FOREIGN KEY (doc_category_id) REFERENCES doc_categories (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_69DC2D0F41CF475B ON doc_files (doc_category_id)');
    }
}
