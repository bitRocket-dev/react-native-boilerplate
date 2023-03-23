# Indice

- [Naming Convention](@docs/NAMING_CONVENTION.md)
- [Git Flow](@docs/GIT_FLOW.md)

### Strumenti utilizzati

- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

# Introduzione

L'applicazione viene sviluppata in [react-native 0.71.4](https://reactnative.dev/blog/2023/01/12/version-071) utilizzando [react-native-cli](https://reactnative.dev/docs/environment-setup#creating-a-new-application) con template [typescript](https://www.typescriptlang.org).

_Si suggerisce l'utilizzo dell'editor [VSCode](https://code.visualstudio.com/)_

- Lo _state_ dell'applicativo viene gestito utilizzando [redux](https://redux.js.org/introduction/getting-started)

- Il routing delle pagine è gestito con [react-navigation v6.x](https://reactnavigation.org/docs/getting-started/).

- Il codice viene validato con [eslint](https://eslint.org/) e [prettier](https://prettier.io/) in fase di commit, utilizzando [husky](https://github.com/typicode/husky). Il formato del commit viene validato utilizzando [commitlint](https://github.com/conventional-changelog/commitlint) (vedi di seguito).


[semver]: https://semver.org/lang/it/
[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/
[localizely]: https://app.localizely.com/projects/737afaad-72d8-4cfd-9b19-1fd81b478033/main/dashboard

## Stile e CSS

Per il design si utilizza esclusivamente [@emotion/native](https://emotion.sh/docs/@emotion/native).
I componenti UI vengono sviluppati e testati in isolamento utilizzando [storybook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/).

## Specifiche

Lo sviluppo è _functional oriented_ . Tutti i componenti sono _dumb_, mentre la logica viene gestita all'interno di _custom hook_

## Componenti

- Un componente _View_ è costruito aggregando uno o più componenti _shared_ o _ui_.
- Un componente _shared_ è sviluppato aggregando uno o più componenti _UI_ e _custom hook_
- Il componente _UI_ rappresenta la libreria grafica di conseguenza non ha alcuna logica.
- Lo sviluppo di un componente **non deve superare le 90-100 righe di codice**.

**Ogni componente/funzione viene esportato/a singolarmente**

## Formattazione codice

La formattazione e i controlli sul codice hanno lo scopo di garantire la massima qualità e uniformità all'interno della codebase.

**In fase di commit, viene eseguito in automatico uno script che formatta l'intera codebase secondo la configurazione Prettier definita all'interno del codice, successivamente nel caso in cui ci siano errori typescript o il commit non segua lo standard di formattazione definito (vedi [Git Flow](@docs/GIT_FLOW.md)) un ulteriore script negherà il commit**


## Versioning e Changelog

Il versioning del progetto è calcolato automaticamente a partire dai messaggi di commit che seguono la specifica del [Git Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Per aggiornare versione e changelog, eseguire il comando:

```sh
yarn generate:release
```

### Configurazione VSCode

1. Install `Prettier` extension
2. Go to to `File -> Settings` and search `theme`
3. Click on `Edit in settings.json`
4. Add this entry on opened file `settings.json` and save it

```
  "editor.tabSize": 2,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
    "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
```

## Work flow

- Il package manager utilizzato è YARN **- non si utilizza npm -**
- L'installazione di una nuova libreria richiede l'autorizzazione del Team Lead.
- La modifica delle regole di formattazione richiede l'autorizzazione del Team Lead.
- L'aggiornamento di una libreria richiede l'autorizzazione del Team Lead.

# Naming Convention

Per facilitare lo sviluppo, è importante che i nomi dei componenti e/o di funzioni seguano le seguenti regole di [Naming Convention](@docs/NAMING_CONVENTION.md)

## Scripts utili

- `yarn run build:storybook` build storybook
- `yarn run clean` cancella la cache
- `yarn run postinstall` attiva husky dopo l'installazione dei _node_modules_ _(automatico)_
- `yarn run format` formattazione del codice rispetto alle regole definite
- `yarn run start` avvio dell'applicazione in ambiente staging
- `yarn run test:unit` avvio test Jest

## Altri strumenti utili

- [bundlephobia](https://bundlephobia.com)
