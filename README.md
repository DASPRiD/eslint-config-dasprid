# eslint-config-dasprid

Strict ESLint configuration for TypeScript projects.

## Explanation

Over all the years I developed a very specific coding standard, which I use in both personal and professional projects.
Most of the time I was either using no linting or a very soft one. This was usually enough in small team projects or
where I was the only contributor. But as soon as more developers joined a team, I had to do a lot of linting on incoming
pull requests.

I thus decided to go through all available ESLint rules and compile a config I can reuse across all those projects. This
config is only aimed ad TypeScript projects, as I never write projects in pure JavaScript.

## Installation

Simply install eslint and eslint-config-dasprid:

```bash
npm i -D eslint eslint-config-dasprid
```

If you are working on a React project, you additional need to install a peer dependency:

```bash
npm i -D eslint-plugin-react
```

## Setup

Create a `.eslintrc.json` file:

```json
{
    "extends": "eslint-config-dasprid",
    "parserOptions": {
        "project": "tsconfig.json"
    }
}
```

For React projects, you instead extend `eslint-config-dasprid/react`.

Your `tsconfig.json` must contain the following settings:

```json
{
    "compilerOptions": {
        "noImplicitAny": true,
        "strictNullChecks": true
    }
}
```

## Validate on commit

To validate the coding styles on commit, it is recommended to use lint-staged:

```bash
npx mrm@2 lint-staged
```
