<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220713075030 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie_ref (id INT AUTO_INCREMENT NOT NULL, categorie_ref VARCHAR(255) NOT NULL, categorie_ref_en VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie_univers (id INT AUTO_INCREMENT NOT NULL, categorie_id INT NOT NULL, univers_id INT NOT NULL, INDEX IDX_E2E383FBCF5E72D (categorie_id), INDEX IDX_E2E383F1CF61C0B (univers_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE continents (id INT AUTO_INCREMENT NOT NULL, continent VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE couleur_ref (id INT AUTO_INCREMENT NOT NULL, couleur_ref VARCHAR(255) NOT NULL, couleur_ref_en VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE coupe (id INT AUTO_INCREMENT NOT NULL, coupe_ref VARCHAR(255) NOT NULL, coupe_ref_en VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entretien (id INT AUTO_INCREMENT NOT NULL, entretien VARCHAR(255) NOT NULL, entretien_en VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE export_produit_temporaire (id INT AUTO_INCREMENT NOT NULL, sku INT NOT NULL, marque VARCHAR(255) NOT NULL, reference_fournisseur VARCHAR(255) NOT NULL, couleur_fournisseur VARCHAR(255) DEFAULT NULL, prix_vente DOUBLE PRECISION NOT NULL, prix_vente_remise DOUBLE PRECISION DEFAULT NULL, saison VARCHAR(255) NOT NULL, univers VARCHAR(255) NOT NULL, categorie VARCHAR(255) DEFAULT NULL, sous_categorie VARCHAR(255) DEFAULT NULL, filtre VARCHAR(255) DEFAULT NULL, couleur VARCHAR(255) DEFAULT NULL, pays_origine VARCHAR(255) DEFAULT NULL, grille_taille VARCHAR(255) DEFAULT NULL, attribut VARCHAR(255) DEFAULT NULL, taille_stock_id VARCHAR(100) DEFAULT NULL, taille_stock_code VARCHAR(50) DEFAULT NULL, nom_produit_fr VARCHAR(255) DEFAULT NULL, nom_produit_en VARCHAR(255) DEFAULT NULL, entretien VARCHAR(255) DEFAULT NULL, description_fr VARCHAR(255) DEFAULT NULL, descriptio_en VARCHAR(255) DEFAULT NULL, coupe VARCHAR(255) DEFAULT NULL, taille_portee_mannequin VARCHAR(255) DEFAULT NULL, matiere_1 VARCHAR(255) DEFAULT NULL, pourcent_matiere_1 DOUBLE PRECISION DEFAULT NULL, matiere_2 VARCHAR(255) DEFAULT NULL, pourcent_matiere_2 DOUBLE PRECISION DEFAULT NULL, matiere_3 VARCHAR(255) DEFAULT NULL, pourcent_matiere_3 DOUBLE PRECISION DEFAULT NULL, matiere_4 VARCHAR(255) DEFAULT NULL, pourcent_matiere_4 DOUBLE PRECISION DEFAULT NULL, matiere_5 VARCHAR(255) DEFAULT NULL, pourcent_matiere_5 DOUBLE PRECISION DEFAULT NULL, matiere_6 VARCHAR(255) DEFAULT NULL, pourcent_matiere_6 DOUBLE PRECISION DEFAULT NULL, matiere_7 VARCHAR(255) DEFAULT NULL, pourcent_matiere_7 DOUBLE PRECISION DEFAULT NULL, matiere_8 VARCHAR(255) DEFAULT NULL, pourcent_matiere_8 DOUBLE PRECISION DEFAULT NULL, matiere_9 VARCHAR(255) DEFAULT NULL, pourcent_matiere_9 DOUBLE PRECISION DEFAULT NULL, matiere_10 VARCHAR(255) DEFAULT NULL, pourcent_matiere_10 DOUBLE PRECISION DEFAULT NULL, dimension_fr VARCHAR(255) DEFAULT NULL, dimension_en VARCHAR(255) DEFAULT NULL, pictures LONGTEXT DEFAULT NULL, tags_ref LONGTEXT DEFAULT NULL, categorie_en VARCHAR(255) DEFAULT NULL, sous_categorie_en VARCHAR(255) DEFAULT NULL, filtre_en VARCHAR(255) DEFAULT NULL, univers_en VARCHAR(255) DEFAULT NULL, univers_abreviation VARCHAR(1) DEFAULT NULL, coupe_en VARCHAR(255) DEFAULT NULL, entretien_en VARCHAR(255) DEFAULT NULL, couleur_en VARCHAR(255) DEFAULT NULL, new_produit TINYINT(1) NOT NULL, referencer TINYINT(1) NOT NULL, date_arrivee DATE DEFAULT NULL, new_list_attente TINYINT(1) DEFAULT NULL, date_ref DATE DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE filtre_ref (id INT AUTO_INCREMENT NOT NULL, sous_categorie_ref_id INT DEFAULT NULL, filtre VARCHAR(255) NOT NULL, filtre_ref_en VARCHAR(255) DEFAULT NULL, INDEX IDX_3FA8C6C0E359B7AE (sous_categorie_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fournisseurs (id INT AUTO_INCREMENT NOT NULL, code_fournisseur VARCHAR(255) NOT NULL, nom_fournisseur VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE grille_taille_ref (id INT AUTO_INCREMENT NOT NULL, grille_taille_ref VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE magasins (id INT AUTO_INCREMENT NOT NULL, code_magasin INT NOT NULL, magasin VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marque_ref (id INT AUTO_INCREMENT NOT NULL, marque VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE matiere (id INT AUTO_INCREMENT NOT NULL, matiere VARCHAR(255) NOT NULL, matiere_en VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pays (id INT AUTO_INCREMENT NOT NULL, continent_id INT DEFAULT NULL, pays VARCHAR(255) NOT NULL, INDEX IDX_349F3CAE921F4C77 (continent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit_matiere (id INT AUTO_INCREMENT NOT NULL, produit_id INT NOT NULL, matiere_id INT NOT NULL, pourcentage_matiere INT NOT NULL, INDEX IDX_56EFDC33F347EFB (produit_id), INDEX IDX_56EFDC33F46CD258 (matiere_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produits (id INT AUTO_INCREMENT NOT NULL, produit_leclaireur_id INT NOT NULL, produit_fournisseur_id INT NOT NULL, taille VARCHAR(100) NOT NULL, code_couleur VARCHAR(255) NOT NULL, reference_couleur VARCHAR(255) NOT NULL, INDEX IDX_BE2DDF8CC909E630 (produit_leclaireur_id), INDEX IDX_BE2DDF8C649D40A (produit_fournisseur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produits_fournisseur (id INT AUTO_INCREMENT NOT NULL, fournisseur_id INT NOT NULL, reference_fournisseur VARCHAR(255) NOT NULL, annee_sortie INT NOT NULL, code_saison INT NOT NULL, saison VARCHAR(100) DEFAULT NULL, grille_taille VARCHAR(100) NOT NULL, INDEX IDX_AB4CD5BF670C757F (fournisseur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produits_leclaireur (id INT AUTO_INCREMENT NOT NULL, marque_update_id INT DEFAULT NULL, pays_origine_id INT DEFAULT NULL, sku INT NOT NULL, code_tag INT DEFAULT NULL, tag VARCHAR(255) DEFAULT NULL, date_arrivee DATE NOT NULL, date_ajout DATE NOT NULL, code_famille_5 INT DEFAULT NULL, famille_5 VARCHAR(255) DEFAULT NULL, code_famille_6 INT DEFAULT NULL, famille_6 VARCHAR(255) DEFAULT NULL, code_mode_aquisition INT DEFAULT NULL, mode_acquisition VARCHAR(255) DEFAULT NULL, INDEX IDX_185CDE93ADFC272D (marque_update_id), INDEX IDX_185CDE93A6A34A66 (pays_origine_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produits_temporaire (id INT AUTO_INCREMENT NOT NULL, sku INT NOT NULL, date_arrivee DATE NOT NULL, code_fournisseur VARCHAR(255) NOT NULL, nom_fournisseur VARCHAR(255) NOT NULL, reference_fournisseur VARCHAR(255) NOT NULL, code_couleur VARCHAR(255) NOT NULL, reference_couleur_1 VARCHAR(255) DEFAULT NULL, reference_couleur_2 VARCHAR(255) DEFAULT NULL, code_saison INT NOT NULL, code_famille_1 INT NOT NULL, libelle_famille_1 VARCHAR(255) NOT NULL, code_famille_2 INT NOT NULL, libelle_famille_2 VARCHAR(255) NOT NULL, code_famille_3 INT NOT NULL, libelle_famille_3 VARCHAR(255) NOT NULL, code_famille_4 INT NOT NULL, libelle_famille_4 VARCHAR(255) NOT NULL, code_famille_5 INT DEFAULT NULL, libelle_famille_5 VARCHAR(255) DEFAULT NULL, code_famille_6 INT DEFAULT NULL, libelle_famille_6 VARCHAR(255) DEFAULT NULL, stock_mag_0 INT DEFAULT NULL, stock_mag_3 INT DEFAULT NULL, stock_mag_7 INT DEFAULT NULL, stock_mag_9 INT DEFAULT NULL, stock_mag_11 INT DEFAULT NULL, stock_mag_12 INT DEFAULT NULL, stock_mag_14 INT DEFAULT NULL, stock_mag_18 INT DEFAULT NULL, stock_mag_20 INT DEFAULT NULL, stock_mag_60 INT DEFAULT NULL, grille_taille VARCHAR(100) NOT NULL, taille VARCHAR(100) NOT NULL, prix_vente DOUBLE PRECISION NOT NULL, annee_sortie INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE referencement (id INT AUTO_INCREMENT NOT NULL, univers_ref_id INT DEFAULT NULL, sous_categorie_ref_id INT DEFAULT NULL, filtre_id INT DEFAULT NULL, couleur_ref_id INT DEFAULT NULL, pays_origine_id INT DEFAULT NULL, attribut_id INT DEFAULT NULL, coupe_id INT DEFAULT NULL, entretien_id INT DEFAULT NULL, produit_leclaireur_id INT DEFAULT NULL, date_ref DATE DEFAULT NULL, nom_produit_fr VARCHAR(255) DEFAULT NULL, nom_produit_en VARCHAR(255) DEFAULT NULL, description_fr VARCHAR(255) DEFAULT NULL, description_en VARCHAR(255) DEFAULT NULL, notes LONGTEXT DEFAULT NULL, dimension_fr VARCHAR(255) DEFAULT NULL, dimension_en VARCHAR(255) DEFAULT NULL, taille_portee_mannequin VARCHAR(255) DEFAULT NULL, pictures LONGTEXT DEFAULT NULL, tags_ref LONGTEXT DEFAULT NULL, INDEX IDX_83A125FE66A27768 (univers_ref_id), INDEX IDX_83A125FEE359B7AE (sous_categorie_ref_id), INDEX IDX_83A125FECC9B96EA (filtre_id), INDEX IDX_83A125FEC8C48852 (couleur_ref_id), INDEX IDX_83A125FEA6A34A66 (pays_origine_id), INDEX IDX_83A125FE51383AF3 (attribut_id), INDEX IDX_83A125FE717D2393 (coupe_id), INDEX IDX_83A125FE548DCEA2 (entretien_id), INDEX IDX_83A125FEC909E630 (produit_leclaireur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE skus_temporaire (id INT AUTO_INCREMENT NOT NULL, sku INT NOT NULL, date_ajout DATE NOT NULL, date_arrivee DATE NOT NULL, univers VARCHAR(255) DEFAULT NULL, marque VARCHAR(255) NOT NULL, categorie VARCHAR(255) DEFAULT NULL, prix_vente DOUBLE PRECISION NOT NULL, boissy INT DEFAULT NULL, sevigne INT DEFAULT NULL, herold INT DEFAULT NULL, cheneviere INT DEFAULT NULL, reference INT DEFAULT NULL, total_stock INT DEFAULT NULL, season VARCHAR(255) DEFAULT NULL, lien VARCHAR(255) DEFAULT NULL, tag VARCHAR(255) DEFAULT NULL, picture VARCHAR(255) DEFAULT NULL, notes LONGTEXT DEFAULT NULL, farfetch INT DEFAULT NULL, sous_categorie VARCHAR(255) NOT NULL, couleur_fnr VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sous_categorie_fnr (id INT AUTO_INCREMENT NOT NULL, code_sous_categorie VARCHAR(255) NOT NULL, sous_categorie VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sous_categorie_ref (id INT AUTO_INCREMENT NOT NULL, categorie_ref_id INT DEFAULT NULL, sous_categorie_ref VARCHAR(255) NOT NULL, sous_categorie_ref_en VARCHAR(255) DEFAULT NULL, INDEX IDX_7BFFA2DA791EB90 (categorie_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stocks (id INT AUTO_INCREMENT NOT NULL, magasin_id INT NOT NULL, produits_id INT NOT NULL, quantite INT NOT NULL, INDEX IDX_56F7980520096AE3 (magasin_id), INDEX IDX_56F79805CD11A2CF (produits_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE taille_ref (id INT AUTO_INCREMENT NOT NULL, grille_taille_ref_id INT DEFAULT NULL, taille_ref VARCHAR(255) DEFAULT NULL, stock_id VARCHAR(100) NOT NULL, stock_code VARCHAR(50) DEFAULT NULL, INDEX IDX_82268A2BE4D38067 (grille_taille_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tarifs (id INT AUTO_INCREMENT NOT NULL, pays_id INT DEFAULT NULL, produit_leclaireur_id INT NOT NULL, prix_vente DOUBLE PRECISION NOT NULL, prix_remise DOUBLE PRECISION DEFAULT NULL, INDEX IDX_F9B8C496A6E44244 (pays_id), INDEX IDX_F9B8C496C909E630 (produit_leclaireur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE univers_ref (id INT AUTO_INCREMENT NOT NULL, univers_ref VARCHAR(255) NOT NULL, univers_ref_en VARCHAR(255) DEFAULT NULL, univers_ref_abreviation VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categorie_univers ADD CONSTRAINT FK_E2E383FBCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie_ref (id)');
        $this->addSql('ALTER TABLE categorie_univers ADD CONSTRAINT FK_E2E383F1CF61C0B FOREIGN KEY (univers_id) REFERENCES univers_ref (id)');
        $this->addSql('ALTER TABLE filtre_ref ADD CONSTRAINT FK_3FA8C6C0E359B7AE FOREIGN KEY (sous_categorie_ref_id) REFERENCES sous_categorie_ref (id)');
        $this->addSql('ALTER TABLE pays ADD CONSTRAINT FK_349F3CAE921F4C77 FOREIGN KEY (continent_id) REFERENCES continents (id)');
        $this->addSql('ALTER TABLE produit_matiere ADD CONSTRAINT FK_56EFDC33F347EFB FOREIGN KEY (produit_id) REFERENCES produits_leclaireur (id)');
        $this->addSql('ALTER TABLE produit_matiere ADD CONSTRAINT FK_56EFDC33F46CD258 FOREIGN KEY (matiere_id) REFERENCES matiere (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CC909E630 FOREIGN KEY (produit_leclaireur_id) REFERENCES produits_leclaireur (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8C649D40A FOREIGN KEY (produit_fournisseur_id) REFERENCES produits_fournisseur (id)');
        $this->addSql('ALTER TABLE produits_fournisseur ADD CONSTRAINT FK_AB4CD5BF670C757F FOREIGN KEY (fournisseur_id) REFERENCES fournisseurs (id)');
        $this->addSql('ALTER TABLE produits_leclaireur ADD CONSTRAINT FK_185CDE93ADFC272D FOREIGN KEY (marque_update_id) REFERENCES marque_ref (id)');
        $this->addSql('ALTER TABLE produits_leclaireur ADD CONSTRAINT FK_185CDE93A6A34A66 FOREIGN KEY (pays_origine_id) REFERENCES pays (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FE66A27768 FOREIGN KEY (univers_ref_id) REFERENCES univers_ref (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FEE359B7AE FOREIGN KEY (sous_categorie_ref_id) REFERENCES sous_categorie_ref (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FECC9B96EA FOREIGN KEY (filtre_id) REFERENCES filtre_ref (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FEC8C48852 FOREIGN KEY (couleur_ref_id) REFERENCES couleur_ref (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FEA6A34A66 FOREIGN KEY (pays_origine_id) REFERENCES pays (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FE51383AF3 FOREIGN KEY (attribut_id) REFERENCES taille_ref (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FE717D2393 FOREIGN KEY (coupe_id) REFERENCES coupe (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FE548DCEA2 FOREIGN KEY (entretien_id) REFERENCES entretien (id)');
        $this->addSql('ALTER TABLE referencement ADD CONSTRAINT FK_83A125FEC909E630 FOREIGN KEY (produit_leclaireur_id) REFERENCES produits_leclaireur (id)');
        $this->addSql('ALTER TABLE sous_categorie_ref ADD CONSTRAINT FK_7BFFA2DA791EB90 FOREIGN KEY (categorie_ref_id) REFERENCES categorie_ref (id)');
        $this->addSql('ALTER TABLE stocks ADD CONSTRAINT FK_56F7980520096AE3 FOREIGN KEY (magasin_id) REFERENCES magasins (id)');
        $this->addSql('ALTER TABLE stocks ADD CONSTRAINT FK_56F79805CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE taille_ref ADD CONSTRAINT FK_82268A2BE4D38067 FOREIGN KEY (grille_taille_ref_id) REFERENCES grille_taille_ref (id)');
        $this->addSql('ALTER TABLE tarifs ADD CONSTRAINT FK_F9B8C496A6E44244 FOREIGN KEY (pays_id) REFERENCES pays (id)');
        $this->addSql('ALTER TABLE tarifs ADD CONSTRAINT FK_F9B8C496C909E630 FOREIGN KEY (produit_leclaireur_id) REFERENCES produits_leclaireur (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorie_univers DROP FOREIGN KEY FK_E2E383FBCF5E72D');
        $this->addSql('ALTER TABLE sous_categorie_ref DROP FOREIGN KEY FK_7BFFA2DA791EB90');
        $this->addSql('ALTER TABLE pays DROP FOREIGN KEY FK_349F3CAE921F4C77');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FEC8C48852');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FE717D2393');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FE548DCEA2');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FECC9B96EA');
        $this->addSql('ALTER TABLE produits_fournisseur DROP FOREIGN KEY FK_AB4CD5BF670C757F');
        $this->addSql('ALTER TABLE taille_ref DROP FOREIGN KEY FK_82268A2BE4D38067');
        $this->addSql('ALTER TABLE stocks DROP FOREIGN KEY FK_56F7980520096AE3');
        $this->addSql('ALTER TABLE produits_leclaireur DROP FOREIGN KEY FK_185CDE93ADFC272D');
        $this->addSql('ALTER TABLE produit_matiere DROP FOREIGN KEY FK_56EFDC33F46CD258');
        $this->addSql('ALTER TABLE produits_leclaireur DROP FOREIGN KEY FK_185CDE93A6A34A66');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FEA6A34A66');
        $this->addSql('ALTER TABLE tarifs DROP FOREIGN KEY FK_F9B8C496A6E44244');
        $this->addSql('ALTER TABLE stocks DROP FOREIGN KEY FK_56F79805CD11A2CF');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8C649D40A');
        $this->addSql('ALTER TABLE produit_matiere DROP FOREIGN KEY FK_56EFDC33F347EFB');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CC909E630');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FEC909E630');
        $this->addSql('ALTER TABLE tarifs DROP FOREIGN KEY FK_F9B8C496C909E630');
        $this->addSql('ALTER TABLE filtre_ref DROP FOREIGN KEY FK_3FA8C6C0E359B7AE');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FEE359B7AE');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FE51383AF3');
        $this->addSql('ALTER TABLE categorie_univers DROP FOREIGN KEY FK_E2E383F1CF61C0B');
        $this->addSql('ALTER TABLE referencement DROP FOREIGN KEY FK_83A125FE66A27768');
        $this->addSql('DROP TABLE categorie_ref');
        $this->addSql('DROP TABLE categorie_univers');
        $this->addSql('DROP TABLE continents');
        $this->addSql('DROP TABLE couleur_ref');
        $this->addSql('DROP TABLE coupe');
        $this->addSql('DROP TABLE entretien');
        $this->addSql('DROP TABLE export_produit_temporaire');
        $this->addSql('DROP TABLE filtre_ref');
        $this->addSql('DROP TABLE fournisseurs');
        $this->addSql('DROP TABLE grille_taille_ref');
        $this->addSql('DROP TABLE magasins');
        $this->addSql('DROP TABLE marque_ref');
        $this->addSql('DROP TABLE matiere');
        $this->addSql('DROP TABLE pays');
        $this->addSql('DROP TABLE produit_matiere');
        $this->addSql('DROP TABLE produits');
        $this->addSql('DROP TABLE produits_fournisseur');
        $this->addSql('DROP TABLE produits_leclaireur');
        $this->addSql('DROP TABLE produits_temporaire');
        $this->addSql('DROP TABLE referencement');
        $this->addSql('DROP TABLE skus_temporaire');
        $this->addSql('DROP TABLE sous_categorie_fnr');
        $this->addSql('DROP TABLE sous_categorie_ref');
        $this->addSql('DROP TABLE stocks');
        $this->addSql('DROP TABLE taille_ref');
        $this->addSql('DROP TABLE tarifs');
        $this->addSql('DROP TABLE univers_ref');
    }
}
