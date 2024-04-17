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

3. Create your `.env` files as needed. All the supported environment variables for React SPA are listed in the file at `packages/web/.env`. You need to create your actual version of the file, e.g., `.env.local`, `.env.development`, `.env.production`, etc. Git ignores all the `.local` files. More about `.env` override conventions can be found in the [Dotenv docs](https://github.com/bkeepers/dotenv) or in the [Vite docs](https://vitejs.dev/guide/env-and-mode.html#env-files).

## Available Scripts

The available NPM scripts for the Monovitality project are in the main `package.json` file.

- `dev`: Runs the React SPA in the development environment.
- `build`: Builds React SPA for deployment. Set the `MONOVITALITY_SPA_BASE_URL` if you need to define the base URL.
- `storybook`: Runs Storybook in the development environment.
- `build-storybook`: Builds Storybook for deployment.
- `dev:site`: Runs Gatsby static site in the development environment.
- `build:site`: Builds Gatsby static site for deployment.
- `clean:site`: Cleans cache and build for Gatsby static site.
- `lint`: Performs linting across all the code.
- `test`: Runs unit tests across all the packages.
- `preview`: Starts local server to preview React SPA site production build.
- `format`: Runs Prettier, a code formatter, on all files with the specified extensions.
- `lint:config-inspector`: Runs [ESLint config inspector](https://eslint.org/blog/2024/04/eslint-config-inspector/) to debug ESLint configuration.

## Demo

You can see the deployed version of the project at [GitHub Pages](https://constantiner.github.io/monovitality/). The demo includes the React SPA, Storybook, and Gatsby static site.

You can switch between light and dark themes with the `Alt+T` keyboard shortcut. This shortcut is available in the Gatsby static site and the React SPA.

## Use

You can use this repository as a starter to bootstrap your projects or borrow some code or ideas. The main purpose of the project is to provide infrastructure and project organization.

## CRA changes

For migration of your React SPA from using Create React Application (CRA) to Vite, you need to make the following changes:

- React components exports. Single export per file for HMR with SWC.
- Environment variables. Replace `REACT_APP_` with `VITE_` for exposed environment variables. Use `import.meta.env` instead of `process.env`. See [Vite docs](https://vitejs.dev/guide/env-and-mode.html#env-variables).

## IDE settings

Do not forget to add to `.vscode/settings.json` the following:

```json
{
    "eslint.workingDirectories": [{ "pattern": "./packages/*/" }]
}
```
