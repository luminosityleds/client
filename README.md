# React + TypeScript + Vite

From [Vite](https://vitejs.dev/guide/):
## Overview

# Components
Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:
- A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box. Read about what's possible in the Features Guide. Support for frameworks or integration with other tools is possible through Plugins. The Config Section explains how to adapt Vite to your project if needed.

Vite is also highly extensible via its Plugin API and JavaScript API with full typing support.

You can learn more about the rationale behind the project in the Why Vite section.

## Scripts
From the project's root directory, you can run:

- `npm start dev` to start the development server
- `npm build` to build for production
- `npm preview` to locally previow production build
- `npm test` to run Vitest
- `npm test converge` to run Vitest convergance

## Noteable Changes After Migrating to Vite from Create-React-App

- `index.html` is now in root, instead of in `/public`
- The Vite installation of tailwind requires PostCSS and Autoprefixer to be installed, as well
- Instead of Jest, we'll be using Vitest for testing

## Docker / Containerization

### Build

```shell
docker build -t console:latest_tag . 
```

#### Example

```shell
docker build -t console:0.1.0 .
```

### Run

```shell
docker run -d --rm -p 3000:3000 console:latest_tag
```

#### Example

```shell
docker run -d --rm -p 3000:3000 console:0.1.0
```