
# Intention
The main purpose of this library (hereinafter referred to as 'Lib Config') is to provide a global ESLint and Prettier configuration, ensuring that all developers use the same setup. As a result, developers will avoid configuration conflicts between different team members.

## ESLint and Prettier
Use Prettier for code formatting and ESLint for identifying bugs. These tools will help ensure consistent code structure across a wide variety of repositories within an organization, or even if you need a standardized configuration for your personal projects.

## Installation
If you don't have a repository initialized yet, a basic example is provided in the following lines.

To be considered: since Lib Config uses Prettier within the ESLint configuration, you should install the additional libraries **"eslint-config-prettier"** and **"eslint-plugin-prettier"** to ensure proper functionality.

This example will be done with Vite.
  - Start a project. You can follow the scaffolding instructions in the [official Vite documentation](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).
  - Vite provides an 'eslint.config.js' file by default.
    > If you're using a TypeScript project, in the `extends` configuration, spread the Lib Config and Prettier plugin configurations. It would look something like this:

      ```js
      import eslintConfigGlobal from "eslint-config-global";
      import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

      {
        ...otherConfigurationsAndPlugins,
        extends: [
          js.configs.recommended,
          ...tseslint.configs.recommended,
          ...eslintConfigGlobal,
          eslintPluginPrettierRecommended
        ]
      }
      ```

    > If you're using a JavaScript project, in the final configuration, spread the Lib Config and Prettier plugin configurations. It would look something like this:

      ```js
      import eslintConfigGlobal from "eslint-config-global";
      import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

      {
        ...otherConfigurationsAndPlugins,
        ...eslintConfigGlobal,
        eslintPluginPrettierRecommended
      }
      ```

  - Take care of ignored files. Make sure to only include the files you want ESLint to check. By default, ESLint ignores 'node_modules' and '.git' files, but you may need to add additional directories such as '/dist/' or '/test/', for example. The Lib Config only applies rules; additional configuration needs to be added for each project.

  - Once you've checked those points, you can test the configuration by running `npx eslint .` or `npx eslint --fix .` to allow ESLint to fix some errors. Remember, ESLint can only fix errors it can handle automatically, so it's likely that some errors will need to be fixed manually.
