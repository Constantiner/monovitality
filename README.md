# Monovitality (React + TypeScript + Vite)<!-- omit in toc -->

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)

Monovitality is a TypeScript-based mono repository (monorepo) that offers opinionated solutions for some advanced challenges of front-end development based on React. It utilizes Lerna and NPM workspaces for monorepo management.

- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Demo](#demo)
- [Use](#use)
- [CRA changes](#cra-changes)
- [IDE settings](#ide-settings)

## Key Features

- **TypeScript Monorepo**: Utilizes Lerna and NPM workspaces for monorepo management.
- **Best Practices**: Enforces best practices across all the code with tools such as ESLint, TypeScript, Stylelint, Prettier, Git pre-commit hooks with Husky and Lint-staged, and Jest for unit tests and Storybook for isolated component development.
- **React SPA**: The main module is a React SPA, which uses Vite with SWC for Hot Module Replacing in the local development environment. It is located in the `web` package.
- **Styling**: All the React code uses SCSS for styling with CSS.
- **Shareable Components**: The `components` package contains shareable React components supporting dark and light themes.
- **Lazy Loading**: React SPA utilizes lazy loading for code splitting. The `submodule` package is loaded on demand.
- **Shareable Types**: `types` package contains shareable TypeScript types and corresponding type guards.
- **Storybook**: The `storybook` package contains stories for components and supports switching between dark and light themes.
- **Static Site**: `site` package contains a static site generated with Gatsby, using the same React components.
- **CI/CD**: Includes GitHub actions for quality checks (linting and testing), build steps, and deployment to GitHub Pages.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/constantiner/monovitality.git
```

2. Install NPM packages:

```bash
cd monovitality
npm ci
```

3. Create your `.env` files as needed. All the supported environment variables for React SPA are listed in the file located at `packages/web/.env`. You need to create your actual version of the file, e.g., `.env.local`, `.env.development`, `.env.production`, etc. All the `.local` files are ignored by Git. More about `.env` override conventions can be found in the [Dotenv docs](https://github.com/bkeepers/dotenv) or in the [Vite docs](https://vitejs.dev/guide/env-and-mode.html#env-files).

## Available Scripts

The available NPM scripts for the Monovitality project can be found in the main `package.json` file.

1. `dev`: Runs the React SPA in development environment.
2. `build`: Builds React SPA for deployment. Set the `MONOVITALITY_SPA_BASE_URL` if you need to define base URL.
3. `storybook`: Runs Storybook in development environment.
4. `build-storybook`: Builds Storybook for deployment.
5. `dev:site`: Runs Gatsby static site in development environment.
6. `build:site`: Builds Gatsby static site for deployment.
7. `clean:site`: Cleans cache and build for Gatsby static site.
8. `lint`: Performs linting across all the code.
9.  `test`: Runs unit tests across all the packages.
10. `preview`: Starts local server to preview production build of React SPA site.
11. `format`: Runs Prettier, a code formatter, on all files with the specified extensions.

## Demo

You can see the deployed version of the project at [https://constantiner.github.io/monovitality/](https://constantiner.github.io/monovitality/)

## Use

You can use this repository as a starter to bootstrap your own projects or borrow some code or ideas. The main purpose of the project is to provide infrastructure and project organization.

## CRA changes

For migration your React SPA from using Create React Application (CRA) to Vite, you need to make the following changes:

- React components exports. Single export per file for HMR with SWC.
- Environment variables. Replace REACT_APP_ with VITE_ for exposed environment variables. Use `import.meta.env` instead of `process.env`. See [Vite docs](https://vitejs.dev/guide/env-and-mode.html#env-variables).

## IDE settings

Do not forget to add to `.vscode/settings.json` the following:

```json
{
    "eslint.workingDirectories": [{ "pattern": "./packages/*/" }]
}
```
