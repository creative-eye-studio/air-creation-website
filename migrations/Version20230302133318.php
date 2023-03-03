<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230302133318 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE option_models DROP FOREIGN KEY FK_A78632DE3ADB05F1');
        $this->addSql('DROP INDEX IDX_A78632DE3ADB05F1 ON option_models');
        $this->addSql('ALTER TABLE option_models DROP options_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE option_models ADD options_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE option_models ADD CONSTRAINT FK_A78632DE3ADB05F1 FOREIGN KEY (options_id) REFERENCES options (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_A78632DE3ADB05F1 ON option_models (options_id)');
    }
}
