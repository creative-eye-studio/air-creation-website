<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230302133519 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE options ADD option_model_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE options ADD CONSTRAINT FK_D035FA875902C643 FOREIGN KEY (option_model_id) REFERENCES option_models (id)');
        $this->addSql('CREATE INDEX IDX_D035FA875902C643 ON options (option_model_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE options DROP FOREIGN KEY FK_D035FA875902C643');
        $this->addSql('DROP INDEX IDX_D035FA875902C643 ON options');
        $this->addSql('ALTER TABLE options DROP option_model_id');
    }
}
