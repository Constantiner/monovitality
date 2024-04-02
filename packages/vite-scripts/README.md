# `@monovitality/vite-scripts`

A package with shared Vite scripts for monovitality project's packages.

This package provides a base Vite configuration to share between React applications and Storybook. It allows you to maintain a consistent build setup across your projects, with the ability to adjust some build parameters as needed.

## Usage

You can import the base configuration into your project as follows:

```ts
import { getViteConfig } from "@monovitality/vite-scripts";
```

Then, you can use `getViteConfig` to generate your Vite configuration.

See usage examples in the `packages/web` and `packages/storybook` packages.

## Note

This package is written in JavaScript, not TypeScript. This is because `vite.config.ts` is not able to import TypeScript files. Please keep this in mind when using this package.
