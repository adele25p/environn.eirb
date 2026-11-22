# Conventions — Site Environn'eirb
Document de règles de développement : organisation du repo.

**Version** : v1.0

## Organisation du repo

| Fini | Fichier / Dossier | Rôle |
|---|---|---|
| ✅ | *.gitignore* | Fichiers/dossiers exclus du versioning |
| ✅ | *README.md* | Point d'entrée du repo : présentation du projet, installation, lancement |
| ✅ | *package.json* | Dépendances, scripts, métadonnées. Modifié via `npm install <paquet>. Les scripts s’éditent à la main. |
| ✅ | *package-lock.json* | Fige les versions exactes de toutes les dépendances, pour garantir des installs identiques partout.  Fichier généré automatiquement par npm install (lors de la première installation) et mis à jour à chaque modification de package.json. Ne pas le modifier manuellement. |
| | | |
| | *static/* | |
| ❌ | *↳ favicon.ico* | Favicon. |
| ✅ | *↳ fonts/* | Fichiers de police (`.woff2`). |
| ✅ | *↳ robots.txt* | Indique aux robots des moteurs de recherche quelles pages ils peuvent explorer |
| | | |
| ✅ | *hugo.toml* | Configuration de Hugo. |
| | | |
| | *layouts/* | |
| ✅ | *↳ baseof.html* | Template de base pour toutes les pages html. |
| | *↳ _partials/* | |
| ✅ | &nbsp;&nbsp;&nbsp;*↳ head.html* | Contenu de la balise `<head>` de toutes les pages. |
| ✅ | &nbsp;&nbsp;&nbsp;*↳ header.html* | Contenu de l'en-tête `<header>` de toutes les pages. |
| ✅ | &nbsp;&nbsp;&nbsp;*↳ footer.html* | Contenu du pied de page `<footer>` de toutes les pages. |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ scripts.html* | Inclusion des scripts JS de toutes les pages. |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ ui/* | Éléments d'interface structurels et récurrents, constitués du même ensemble de balises HTML obligatoires. Ils ne doivent contenir que très peu, voire pas, de styles. Un élément trop simple, comme un titre seul, n'a pas sa place dans ce dossier. |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ components/* | Composants réutilisables plus complexes, qui intègrent leur propre style. Chaque variante d'un même élément doit être regroupée dans ce dossier : par exemple, les différents fichiers `*-button.html` pour les boutons. |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ sections/* | Sections autonomes des pages, organisées par page afin d'éviter des fichiers trop longs et de faciliter la maintenance. Elles doivent déléguer autant que possible la création des éléments d'interface aux composants réutilisables. |
| ❌ | *↳ home.html* | Page d'accueil. |
| | *↳ chronicles/* | |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ list.html* | Page "Le Fil éco". |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ single.html* | Page d'une chronique. |
| | *↳ actualities/* | |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ list.html* | Page "Actualités". |
| | *↳ about/* | |
| ❌ | &nbsp;&nbsp;&nbsp;*↳ list.html* | Page "À propos". |
| ❌ | *↳ 404.html* | Page d'erreur 404. |
| | | |
| | *content/* | |
| ❌ | *↳ chronicles/* | Contient les chroniques. |
| ❌ | *↳ actualities/* | Contient les actualités. |
| | | |
| | *archetypes/* | |
| ❌ | *↳ chronicles.md* | Template pour une nouvelle chronique. |
| ❌ | *↳ actualities.md* | Template pour une nouvelle actualité. |
| | | |
| | *data/* | |
| ❌ | *↳ club.yaml* | Données sur le club (nom, description, adresse, email, etc.). |
| ❌ | *↳ members.yaml* | Données sur les membres de l'équipe (noms, rôles, responsabilités, etc.). |
| ❌ | *↳ events.yaml* | Données sur les événements (titre, date, description, etc.). |
| | | |
| | *assets/* | |
| | *↳ css/* | Styles CSS. |
| | *↳ js/* | Scripts JavaScript. Un fichier par comportement. |
| | *↳ images/* | Images du site. |
| | | |
| | *.github/* | |
| ❌ | *↳ workflows/deploy.yml* | Pipeline de déploiement GitHub Actions vers GitHub Pages. |