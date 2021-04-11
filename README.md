# React Boilerplate Client

## CHANGELOG

11/04/2021 : Le projet est écrit avec le dernières évolutions `EcmaScript` jusqu'à ES12 (EcmaScript 2021).

---

## Pré-requis

- Node.js (^LTS) : https://nodejs.org/fr/ (Language et Environnement de développement)
- Yarn : https://yarnpkg.com/lang/fr/ (Gestionnaire de dépendances)

---

## Configuration

Le dossier `/config` contient :

- Un fichier `api/endpoints.js` avec les path utilisés pour les appels faits par l'application
- Des fichiers `webpack/[environnement].js` avec la config de build pour l'application

Le dossier racine `/` contient des points d'entrées de config :

- `.babelrc.js` => config du transpiler `Babel`
- `webpack.config.js` => config du bundler `Webpack`
- `package.json` => config du package manager `Yarn`

NB: Les différents packages, plugins et dépendances sont d'abord installés avec `Yarn`.
Chacun de ces fichiers est ensuite paramétré selon les besoins du projet (voir doc du plugin).

---

## Gestion des dépendances

Nous utilisons `Yarn` mais il est possible également d'utiliser `NPM` (attention aux droits selon l'OS).

Le fichier **package.json** liste l'ensemble des dépendances installées.  
Celles-ci sont générées dans le dossier **node_modules**.

Toute manipulation est à faire depuis la racine du projet.

- Installer/réinstaller toutes les dépendances : `yarn` (raccourci pour yarn install)
- Installer une dépendance de prod : `yarn add nom-du-package@version` => `yarn add react@17.0.1`
- Installer une dépendance de dev : `yarn add -D nom-du-package@version` => `yarn add -D react-dom@17.0.1`
- Installer une dépendance en global : `yarn global add nom-du-package@version` => `yarn global add webpack-cli@latest`
- Mettre à jour une dépendance : `yarn upgrade nom-du-package` => `yarn upgrade react-router-dom`
- Supprimer une dépendance : `yarn remove nom-du-package` => `yarn remove react-dom`

**NB**: la liste officielle des packages Javascript disponibles se trouve sur **https://www.npmjs.com/**.

---

## Executer l'application

L'application est accessible via **http://localhost:8010**.

NB: si vous pointez vos endpoints vers un domain autre que local (ex une API distante), il peut être nécessaire d'utiliser des règles de réécriture (Apache/Nginx) ainsi que des headers pour gérer les appels cross-domain / cross-origin (CORS).

Il est possible d'utiliser un des commandes suivantes selon le pattern :

`yarn nom-du-script --option=value` ou `yarn run nom-du-package --option=value`

- **DEVELOPPEMENT** : `yarn start`  
  Execute un webpack-dev-server sous Node.js et sert en mémoire les fichiers de l'application.  
  L'app est alors accessible via **http://localhost:8007**.  
  Les variables d'environnement sont stockées dans le fichier `.env.dev`

  **Variables d'environnement**  
  Pour que l'app soit compilée avec les bons paramètres, on utilise des fichiers ".env" avec un plugin Webpack.  
  C'est un outil puissant pour injecter des variables d'environnement dans l'appli au build.  
  `.env.prod` : variables pour le build de prod / mode PRODUCTION / pour tout le monde => versionné  
  `.env.dev` : variables pour le dev en local / mode DEVELOPMENT / pour tout le monde => versionné  
  `.env.local` : variables pour le dev en local / **mode development / pour moi seul en local** => non versionné

  `yarn start local` est similaire à `yarn start`, mais utilise le `.env.local` (s'il existe) à la place du `.env.dev`.

  **API locales et distantes**  
  On peut faire pointer l'app sur des API locales (serveur local), ou bien sur des API distantes (serveur de dev).

  - un `yarn start local` fait tourner le client front-end et les API pointent sur le BASE_URL

  Pour les API locales :

  - lancer le back-end qui doit ensuite être accessible sur une URL lcoale (ex : **http://localhost:3000/**)
  - créer un fichier `.env.local` et y placer le `BASE_URL` voulu (ex : `BASE_URL=http://localhost:3000`)

  Pour les API distantes :

  - le fichier `.env.dev` doit contenir le `BASE_URL` voulu (ex : `BASE_URL=http://api/distante/path`)

- **PRODUCTION** : `yarn build`  
  Execute le process complet de compilation et extrait des fichiers.  
  Les fichiers sont extraits dans /public à la racine du projet.  
  Ces derniers sont destinés au déploiement final sur un serveur distant.  
  Les variables d'environnement sont stockées dans le fichier `.env.prod`

- **TEST** : `yarn test`
  Destiné à la stratégie de tests, qui n'a pas encore été mis en place sur ce projet.

- **ESLINT** : `yarn lint:check` / `yarn lint:fix`  
  Execute le linter ESLint sur le code spécifié et utilise les rules du fichier de config  
  Dans un second temps un rapport est généré avec les différentes erreurs à corriger  
  Bien configuré dans l'IDE, c'est un outil efficace pour le clean-code en équipe  
  Un hook de pre-commit est également présent pour éviter que du code non valide soit poussé

- **PRETTIER** : `yarn format:check` / `yarn format:fix`  
  Execute le formatter Prettier sur le code spécifié et utilise les rules du fichier de config  
  Dans un second temps un rapport est généré avec les différentes erreurs à corriger  
  Couplé à un IDE, c'est un outil puissance de clean-code en équipe  
  Un hook de pre-commit est également présent pour éviter que du code non valide soit poussé

---

## Webpack

C'est un outil de packaging/compilation multitâche permettant principalement de :

- configurer et charger les modules/plugins de l'application.
- faire communiquer et compiler/transpiler les extensions/languages (JS, ESx..) ou pseudo-languages (jsx/react)
- exécuter inteligemment l'ensemble des tâches de ces modules (transpilation, minification, injection css..)
- optimiser et extraire en sortie des fichiers utilisables en développement ou production

En développement, il est souvent couplé à un serveur local permettant d'executer l'application.  
En production, il extrait des fichiers (optimisés selon la config donnée) prêts à déployer.

- **Doc de référence** : https://webpack.js.org/concepts/

Nous utilisons [Babel.js](https://babeljs.io) avec [Webpack](#markdown-header-webpack)
pour transpiler le code ESx en ES5.

**NB**: il est nécessaire d'installer un module (via yarn) avant de confier sa mise en route à Webpack.

Les fichiers de configuration se trouvent dans **config/webpack**.

- **default.config.js** => config globale commune à tous les environnements
- **dev.config.js** => config spécifique, modules et plugins optimisés pour le mode `DEVELOPMENT`
- **prod.config.js** => config spécifique, modules et plugins optimisés pour le mode `PRODUCTION`

---

## Analyse et performance

### `Bundle Analyzer`

Il s'agit d'un outil executé avec webpack qui réprésente le découpage de l'application.

- En dévelopement : il est est accessible via **http://localhost:8010**.
- En production : il génère un fichier **analyzer-report.html** à côté des autres fichiers générés.

### `Chunk files`

Nous utilisons Webpack afin de splitter le code selon les principes suivants :

- Seuls les loaders nécessaires sont utilisés pour charger les fichiers
- Les imports sont dynamiques pour éviter la duplication de code/dépendance
- Les fichiers sont générés en plusieurs parties pour réduire leur taille
- Les fichiers splittés sont répartis et nommés par utilité (Code React, dépendance..)

En développement et en production on aura les chunks suivants :

- ReactChunk : react, react-router, react-intl
- MUIChunk : material-ui
- UtilsChunk : lodash, moment, sockjs
- VariousChunk : autres node_modules et dépendances restantes

### `Lazy load`

Nous utilisons la stratégie de Code Spliting fournie par React avec le lazy-load via les ES Modules, sur le principe des imports dynamiques.

Chaque route de l'application donne lieu à la génération d'un fichier .js dédié, lequel est chargé à la demande lors de la navigation sur l'application.  
Le cache navigateur permet une navigation fluide avec un chargement en une seule fois.  
La petite taille des fichiers assure une navigation fluide et une bonne expérience utilisateur.

---

## Librairies utilisées

- Developpement Environment: [Node](https://nodejs.org/en/docs/)
- Package Manager : [Yarn](#markdown-header-gestion-des-dépendances)
- Local Dev Server : [Express](https://expressjs.com)
- Module Bundler : [Webpack](#markdown-header-webpack)
- Javascript Compiler : [Babel](https://babeljs.io)
- Internationalization Library: [Formatjs](https://github.com/formatjs/formatjs)
- Routing Manager Library : [React](https://reactrouter.com/)
- Global State manager : [Overmind](https://overmindjs.org/views/react)
- Cache Query manager : [React-Query](https://react-query.tanstack.com/)
- HTTP Client Provider: [Axios](https://github.com/axios/axios)
- UI Rendering Library : [React-router](https://reactjs.org)
- UI Components Library : [Material-UI](https://material-ui.com/)
- Form & Components Library: [Formik](https://formik.org/)
- Date & Time Library: [moment](https://momentjs.com/)
- Functional Library: [Lodash](https://lodash.com/docs)
