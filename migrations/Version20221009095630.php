<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221009095630 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE documentation DROP FOREIGN KEY FK_73D5A93B7FCDEFA8');
        $this->addSql('DROP INDEX UNIQ_73D5A93B7FCDEFA8 ON documentation');
        $this->addSql('ALTER TABLE documentation CHANGE doc_product_id doc_product_id_id INT NOT NULL');
        $this->addSql('ALTER TABLE documentation ADD CONSTRAINT FK_73D5A93B8D1998B9 FOREIGN KEY (doc_product_id_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_73D5A93B8D1998B9 ON documentation (doc_product_id_id)');
        $this->addSql('ALTER TABLE products DROP documentation_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE documentation DROP FOREIGN KEY FK_73D5A93B8D1998B9');
        $this->addSql('DROP INDEX IDX_73D5A93B8D1998B9 ON documentation');
        $this->addSql('ALTER TABLE documentation CHANGE doc_product_id_id doc_product_id INT NOT NULL');
        $this->addSql('ALTER TABLE documentation ADD CONSTRAINT FK_73D5A93B7FCDEFA8 FOREIGN KEY (doc_product_id) REFERENCES products (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_73D5A93B7FCDEFA8 ON documentation (doc_product_id)');
        $this->addSql('ALTER TABLE products ADD documentation_id INT NOT NULL');
    }
}
