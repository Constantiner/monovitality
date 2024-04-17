# `@monovitality/web`<!-- omit in toc -->

This is a React SPA built using [Vite](https://vitejs.dev/), leveraging [SWC](https://swc.rs/) for a faster and more efficient development experience. The application is configured to use environment variables, providing flexibility and security for configuration settings.

- [Styling](#styling)
- [Lazy Loading and Bundling](#lazy-loading-and-bundling)
- [Components](#components)
- [Testing](#testing)
- [TypeScript](#typescript)
- [Available Scripts](#available-scripts)

## Styling

Styling is handled through [SASS](https://sass-lang.com/), a powerful CSS preprocessor. The application supports both dark and light modes, which can be toggled using the `Alt+T` shortcut.

## Lazy Loading and Bundling

The application utilizes lazy loading for modules from the `submodule` package, which includes both React components and utility functions. [Vite](https://vitejs.dev/) is configured to bundle these submodules into separate chunks, optimizing load times and performance.

## Components

Components are imported from the `components` package, promoting code reusability and modularity.

## Testing

The application includes a suite of tests written in [Jest](https://jestjs.io/), a popular JavaScript testing framework.

## TypeScript

All types within the application are fully annotated with [TypeScript](https://www.typescriptlang.org/), providing static type checking and enhancing developer productivity and code quality.

## Available Scripts

The `package.json` file includes various scripts for running, building, testing, and managing the application. These scripts can be run from the command line using `npm`:

- `npm run dev`: Starts the development server using Vite.

```bash
npm run dev
```

- `npm run build`: Compiles TypeScript files and builds the application for production using Vite. It also sets the `MONOVITALITY_STYLES_WRAPPER` environment variable to `.test` to illustrate building with a custom style wrapper as a namespace in case of integration of the SPA into an existing application. It is worth mentioning that you can find `test` class usage in the HTML template in `packages/web/index.html` file.

```bash
npm run build
```

- `npm run build:custom-root`: Similar to `npm run build`, but allows you to set a custom base URL for the application using the `%%skinRoot%%` string. You can use it if you control loading chunks and assets from a location different from the application's root to replace it with the actual base path in runtime.

```bash
npm run build:custom-root
```

- `npm run types`: Runs TypeScript compiler with no output files for type checks.

```bash
npm run types
```

- `npm run stylelint`: Runs Stylelint to check CSS files.

```bash
npm run stylelint
```

- `npm run preview`: Serves the production build for preview.

```bash
npm run preview
```

- `npm run test`: Runs the Jest test suite.

```bash
npm run test
```

- `npm run test:coverage`: Runs the Jest test suite and generates a coverage report.

```bash
npm run test:coverage
```
