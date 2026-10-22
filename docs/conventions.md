# Conventions — Site Environn'eirb
Document de règles de développement : organisation du repo.

**Version** : v1.0

## Organisation du repo

| Fichier / Dossier | Rôle |
|---|---|
| *.gitignore* | Fichiers/dossiers exclus du versioning |
| *README.md* | Point d'entrée du repo : présentation du projet, installation, lancement |
| *package.json* | Dépendances, scripts, métadonnées. Fichier généré automatiquement. Ne pas le modifier manuellement.|
| *package-lock.json* | Fige les versions exactes de toutes les dépendances, pour garantir des installs identiques partout.  Fichier généré automatiquement par npm install (lors de la première installation) et mis à jour à chaque modification de package.json. Ne pas le modifier manuellement. |
| | |
| *static/* | |
| *↳ favicon.ico* | Favicon. |
| *↳ fonts/* | Fichiers de police (`.woff2`). |
| *↳ robots.txt* | Indique aux robots des moteurs de recherche quelles pages ils peuvent explorer |
| | |
| *hugo.toml* | Configuration de Hugo. |
| | |
| *layouts/* | |
| *↳ _default/* | |
| &nbsp;&nbsp;&nbsp;*↳ baseof.html* | Template de base pour toutes les pages html. |
| *↳ _partials/* | |
| &nbsp;&nbsp;&nbsp;*↳ head.html* | Contenu de la balise `<head>` de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ header.html* | Contenu de l'en-tête `<header>` de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ footer.html* | Contenu du pied de page `<footer>` de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ scripts.html* | Contenu de la balise `<script>` de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ ui/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ icon.html* | Icône de l'application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ button.html* | Bouton de l'application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ card.html* | Carte de l'application. |
| &nbsp;&nbsp;&nbsp;*↳ components/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ section-title.html* | Titre de section. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ cards/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ chronicle-card.html* | Carte d'une chronique. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ member-card.html* | Carte d'un membre de l'équipe. |
| &nbsp;&nbsp;&nbsp;*↳ home-sections/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ hero.html* | Hero de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ chronicles.html* | Section "Le Fil éco" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ events.html* | Section "Actualités" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ join.html* | Section "Nous rejoindre" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ contact.html* | Section "À propos" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;*↳ events-sections/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ calendar.html* | Section "Calendrier" de la page "Actualités". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ actu.html* | Section "Actualités" de la page "Actualités". |
| &nbsp;&nbsp;&nbsp;*↳ about-sections/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ mission.html* | Section "Le Club" de la page "À propos". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ team.html* | Section "L'Équipe" de la page "À propos". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ contact.html* | Section "Le Local" de la page "À propos". |
| *↳ home.html* | Page d'accueil. |
| *↳ chronicles/* | |
| &nbsp;&nbsp;&nbsp;*↳ index.html* | Page "Le Fil éco". |
| &nbsp;&nbsp;&nbsp;*↳ chronicle.html* | Page d'une chronique. |
| *↳ events/* | |
| &nbsp;&nbsp;&nbsp;*↳ index.html* | Page "Actualités". |
| &nbsp;&nbsp;&nbsp;*↳ event.html* | Pop-up d'un événement. |
| *↳ about/* | |
| &nbsp;&nbsp;&nbsp;*↳ index.html* | Page "À propos". |
| | |
| *content/* | |
| | |
| *archetypes/* | Templates pour les nouveaux contenus. |
| | |
| *data/* | Données utilisées par le site. |
| | |
| *assets/* | images, styles, scripts, etc. |
| | |
| `.github/` | |
| *↳ workflows/deploy.yml* | Pipeline de déploiement GitHub Actions vers GitHub Pages. |