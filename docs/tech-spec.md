# Spécifications techniques - Site Environn'eirb
Document de spécifications techniques : présente la stack technique, la structure de l'interface, le contenu des pages etl'accessibilité.

**Version** : v1.0

## 1. Stack technique
**Framework** : Hugo >= 0.146

**Build tool** : Node.js + npm

**Routing** : Hugo (utilise le système de routing natif de Hugo)

**Design System** : Tailwind CSS

**Icônes** : en svg et copiées du set d'icônes de Lucide

## 2. Structure globale de l'interface
*Éléments visibles/persistants sur toutes les pages.*

### 2.1 Header

**Contenu** : 
  - Le logo
  - Le nom du site
  - Le menu de navigation

**Comportement** :
  - Le header est fixe en haut de la page
  - Le menu de navigation est visible sur desktop et caché derrière un menu hamburger sur mobile
  - Le menu de navigation est accessible au clavier (Tab, Entrée, Échap pour fermer le menu)

**Fonctionnalités** :
  - Le logo et le nom du site sont cliquables et redirigent vers la page d'accueil
  - Le menu de navigation contient des liens vers les pages principales (Le Fil éco, Actualités, À propos)

### 2.2 Footer

**Contenu** :
  - Liens vers les réseaux sociaux (canal Telegram, chat Telegram)
  - Logo de l'école (ENSEIRB-MATMECA Bordeaux INP)
  - Copyright © 2026 Environn'eirb. All rights reserved.
  - Nom des auteurs et contributeurs du projet (Réalisé par Adèle, ... avec la contribution de ...)

**Comportement** :
  - Le footer est fixe en bas de la page
  - Le footer apparait au scroll (taille du main content minimum 100vh)
  - Le footer est visible sur toutes les pages

**Fonctionnalités** :
  - Les liens vers les réseaux sociaux ouvrent les pages correspondantes dans un nouvel onglet
  - Le logo de l'école est cliquable et redirige vers le site de l'école

### 2.3 Autres éléments persistants
- Un bouton "Retour en haut" qui apparait lorsque l'utilisateur scroll vers le bas de la page et qui permet de revenir en haut de la page lorsqu'il est cliqué

## 3. Contenu et fonctionnalités par page

**Comportement général** : 
  - Les pages sont responsives et s'adaptent à toutes les tailles d'écran (desktop, tablette, mobile)
  - Les pages ont une taille minimum de 100vh pour que le footer apparaisse au scroll
  - Le contenu des pages apparaît avec un effet fade-in lors de la premiere apparition sur la page

### Page 1 — Home

**Contenu** :
  - Hero (contenu exact à définir)
  - Section "Le Fil éco"
    - aperçu des dernières chroniques du fil d'infos,
    - avec un lien vers la page Le Fil éco
  - Section "Actualités"
    - aperçu des dernières actualités,
    - avec un lien vers la page Actualités
  - Section "Nous rejoindre"
    - description des rôles recherchés,
    - avec un lien vers le chat Telegram pour rejoindre l'équipe
  - Section "À propos"
    - description de l'organisation,
    - adresse physique et email de contact,
    - avec un lien vers la page À propos

### Page 2 — Le Fil éco

**Contenu** :
  - En-tête avec le titre de la page et un sous-titre
  - Système de filtrage des chroniques
  - Liste des chroniques du fil d'infos

**Fonctionnalités** :
  - Les chroniques sont cliquables et redirigent vers la page de la chronique
  - Le système de filtrage permet de trier les chroniques par catégorie, type, date, etc. (à définir)
  - Grille des chroniques responsive

### Page 3 — Actualités

**Contenu** :
  - En-tête avec le titre de la page et un sous-titre
  - Calendrier interactif avec les événements passés et à venir (les grandes dates de l'écologie, les grandes dates du club, les événements du club, etc.)
  - Liste des dernières actualités

**Fonctionnalités** :
  - Les événements du calendrier sont cliquables et font apparaitre un pop-up avec les détails de l'événement

### Page 4 — À propos

**Contenu** :
  - Description de l'organisation (mission, vision, valeurs)
  - Liste des membres de l'équipe (photos et noms des membres du bureau, avec leurs rôles et responsabilités)
  - Information sur notre local (Adresse, plan d'accès, horaires d'ouverture)

**Fonctionnalités** :
  - None

## 4. Accessibilité & contraintes technique
**Techniques non-négociables** :
  - Pas de backend, pas d'API, pas de base de données pour cette version
  - Code propre, commenté, organisé en composants réutilisables
  - Images optimisées pour le web (format `AVIF` pour photos et captures d'écran, `SVG` pour logo/icônes)
  - Auto-hébergement des polices Google Fonts pour respecter le RGPD (site basé en France/UE, évite l'envoi de l'IP des visiteurs à Google)

**Accessibilité** : niveau **WCAG AA** visé, notamment :
  - Contraste texte/fond suffisant (ratio ≥ 4.5:1)
  - Texte alternatif (`alt`) sur toutes les images
  - Navigation complète au clavier (Tab, Entrée, Échap pour fermer menu/pop-up)
  - Structure sémantique correcte (titres hiérarchisés, landmarks `<nav>`/`<main>`)
  - Focus visible sur les éléments interactifs
  - `aria-label` sur les boutons icône seule