# Conventions — Site Environn'eirb
Document de règles de développement : organisation du repo.

**Version** : v1.0

## Organisation du repo

| Fichier / Dossier | Rôle |
|---|---|
| *.gitignore* | Fichiers/dossiers exclus du versioning |
| *README.md* | Point d'entrée du repo : présentation du projet, installation, lancement |
| *package.json* | Dépendances, scripts, métadonnées. Modifié via `npm install <paquet>. Les scripts s’éditent à la main. |
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
| *↳ baseof.html* | Template de base pour toutes les pages html. |
| *↳ _partials/* | |
| &nbsp;&nbsp;&nbsp;*↳ head.html* | Contenu de la balise `<head>` de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ header.html* | Contenu de l'en-tête `<header>` de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ footer.html* | Contenu du pied de page `<footer>` de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ scripts.html* | Inclusion des scripts JS de toutes les pages. |
| &nbsp;&nbsp;&nbsp;*↳ ui/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ icon.html* | Icône de l'application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ button.html* | Bouton de l'application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ card.html* | Carte de l'application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ popup.html* | Fenêtre modale. |
| &nbsp;&nbsp;&nbsp;*↳ components/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ section-header.html* | En-tête d'une section. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ back-to-top.html* | Bouton pour revenir en haut de page. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ cards/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ chronicle-card.html* | Carte d'une chronique. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ member-card.html* | Carte d'un membre de l'équipe. |
| &nbsp;&nbsp;&nbsp;*↳ sections/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ home/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ hero.html* | Hero de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ chronicles.html* | Section "Le Fil éco" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ actualities.html* | Section "Actualités" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ join.html* | Section "Nous rejoindre" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ about.html* | Section "À propos" de la page d'accueil. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ actualities/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ calendar.html* | Section "Calendrier" de la page "Actualités". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ actu.html* | Section "Actualités" de la page "Actualités". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ about/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ mission.html* | Section "Le Club" de la page "À propos". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ team.html* | Section "L'Équipe" de la page "À propos". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ local.html* | Section "Le Local" de la page "À propos". |
| *↳ home.html* | Page d'accueil. |
| *↳ chronicles/* | |
| &nbsp;&nbsp;&nbsp;*↳ list.html* | Page "Le Fil éco". |
| &nbsp;&nbsp;&nbsp;*↳ single.html* | Page d'une chronique. |
| *↳ actualities/* | |
| &nbsp;&nbsp;&nbsp;*↳ list.html* | Page "Actualités". |
| *↳ about/* | |
| &nbsp;&nbsp;&nbsp;*↳ list.html* | Page "À propos". |
| *↳ 404.html* | Page d'erreur 404. |
| | |
| *content/* | |
| *↳ chronicles/* | Contient les chroniques. |
| *↳ actualities/* | Contient les actualités. |
| | |
| *archetypes/* | |
| *↳ chronicles.md* | Template pour une nouvelle chronique. |
| *↳ actualities.md* | Template pour une nouvelle actualité. |
| | |
| *data/* | |
| *↳ club.yaml* | Données sur le club (nom, description, adresse, email, etc.). |
| *↳ members.yaml* | Données sur les membres de l'équipe (noms, rôles, responsabilités, etc.). |
| *↳ events.yaml* | Données sur les événements (titre, date, description, etc.). |
| | |
| *assets/* | |
| *↳ css/* | Styles CSS. |
| *↳ js/* | Scripts JavaScript. Un fichier par comportement. |
| *↳ images/* | Images du site. |
| | |
| *.github/* | |
| *↳ workflows/deploy.yml* | Pipeline de déploiement GitHub Actions vers GitHub Pages. |