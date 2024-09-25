# Todo

## Aperçu

Cette application Vue.js est construite avec Vite et inclut les fonctionnalités suivantes :
- **Pinia** pour la gestion de l'état et l'authentification.
- **Vue Router** pour la gestion des routes.
- **Heroicons** pour les icônes scalables.
- **Chart.js** pour la visualisation de données à l'aide de graphiques.
- **Déploiement avec Docker** pour simplifier la gestion des environnements.

## Table des matières

- [Installation du projet](#installation-du-projet)
- [Développement](#développement)
- [Authentification avec Pinia](#authentification-avec-pinia)
- [Routing avec Vue Router](#routing-avec-vue-router)
- [Icônes avec Heroicons/vue](#icônes-avec-heroiconsvue)
- [Graphiques avec Chart.js](#graphiques-avec-chartjs)
- [Déploiement avec Docker](#déploiement-avec-docker)
- [Structure du projet](#structure-du-projet)

## Installation du projet

Avant de commencer, assurez-vous d'avoir installé **Node.js** sur votre machine. Clonez ensuite ce dépôt et exécutez les commandes suivantes pour installer les dépendances et démarrer le serveur de développement.

### Installation des dépendances

```bash
npm install
```
### Démarrage du serveur de développement
```bash
npm run dev
```
Le serveur Vite démarrera, et votre application sera accessible à l'adresse http://localhost:3000.

### Développement
Pour construire l'application en mode production, exécutez :
```bash
npm run build
```
Pour prévisualiser la version de production localement :
```bash
npm run preview
```
### Authentification avec Pinia
Cette application utilise Pinia pour la gestion de l'état, en particulier pour gérer l'authentification des utilisateurs. La logique d'authentification se trouve dans le fichier stores/auth.store.ts. Pinia fournit un moyen simple et modulaire de gérer l'état de l'application.

### Routing avec Vue Router
Nous utilisons Vue Router pour gérer les différentes vues de l'application. Les routes sont définies dans le fichier src/router/index.js. Cela facilite la navigation entre les composants et les différentes pages.

### Icônes avec Heroicons/vue
Heroicons/vue est utilisé pour intégrer des icônes de haute qualité dans l'application. Vous pouvez importer et utiliser les icônes directement dans vos composants Vue.

### Graphiques avec Chart.js
Nous utilisons Chart.js pour créer des graphiques et visualiser des données dynamiques dans l'application. Chart.js s'intègre facilement à Vue.js pour afficher des graphiques réactifs.

### Déploiement avec Docker
Pour déployer cette application à l'aide de Docker, nous avons inclus un fichier Dockerfile qui permet de construire et de servir l'application avec Nginx.
#### Construire l'image Docker
```bash
docker build -t vue-app .
```

#### Exécuter le conteneur Docker
```bash
docker run -p 80:80 vue-app
```

L'application sera maintenant accessible à l'adresse http://localhost.

Si vous utilisez Docker Compose, vous pouvez démarrer le service facilement en exécutant :

```bash
docker-compose up
```

Cela construira et démarrera le conteneur en fonction du fichier docker-compose.yml.

## Structure du projet

```plaintext
├── dist/                   # Fichiers construits pour la production
├── public/                 # Ressources publiques
├── src/                    # Fichiers source principaux
│   ├── assets/             # Fichiers statiques
│   ├── components/         # Composants Vue
│   ├── router/             # Configuration de Vue Router
│   ├── stores/             # Store Pinia pour la gestion de l'état
│   ├── views/              # Différentes vues de l'application
│   ├── images/             # Différentes images de l'app
│   ├── lib/                # fichiers helpers
│   ├── App.vue             # Composant Vue principal
│   └── main.js             # Point d'entrée de l'application
├── Dockerfile              # Configuration Docker
├── docker-compose.yml      # Configuration Docker Compose
├── package.json            # Dépendances et scripts du projet
└── README.md               # Documentation du projet

