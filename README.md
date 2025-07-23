# Interface client – LMB

Ce projet frontend permet d’interagir avec l’API de l'application LMB .

## Technologies utilisées

- Vue 3 (Composition API)
- TypeScript
- Axios
- TailwindCSS
- Vue Router

## Installation et lancement

1. Cloner le projet :
   ```bash
   git clone <repo_url>
   cd <nom_du_dossier>
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Créer un fichier `.env` à la racine du projet avec le contenu suivant :
   ```
   VITE_API_BASE_URL=http://localhost/test-lmb/public/
   ```

4. Lancer l’environnement de développement :
   ```bash
   npm run dev
   ```

## Structure des fichiers

- `src/views/` : Pages principales (recherche, consultation, modification)
- `src/components/` : Composants réutilisables
- `src/services/` : Appels API via Axios
- `src/models/` : Interfaces TypeScript des données client
- `src/utils/` : Fonctions utilitaires (ex. validation formulaire)
- `src/router/` : Définition des routes Vue Router
- `src/assets/` : Fichiers de style et configuration TailwindCSS

## Fonctionnalités

- Rechercher un client à partir d’un nom
- Afficher la fiche détaillée d’un client
- Modifier les informations d’un client avec validation des champs

## API utilisée

Toutes les requêtes sont envoyées vers l’API  :
```
http://localhost/test-lmb/public/
```
