/* eslint-disable @typescript-eslint/no-require-imports */

const nextPlugin = require("@next/eslint-plugin-next");
const typescriptParserPlugin = require("@typescript-eslint/parser");
// const importAccessPlugin = require("eslint-plugin-import-access/flat-config");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

const baseConfig = require("../../eslint.config.base.js");

const config = [
  ...baseConfig,
  {
    name: "react/rules",
    languageOptions: {
      parser: typescriptParserPlugin,
      parserOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
    },
  },
  {
    name: "next/core-web-vitals",
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  // {
  //   name: "import-access",
  //   languageOptions: {
  //     parser: typescriptParserPlugin,
  //     parserOptions: {
  //       parserOptions: {
  //         project: true,
  //         sourceType: "module",
  //       },
  //     },
  //   },
  //   plugins: {
  //     "import-access": importAccessPlugin,
  //   },
  //   rules: {
  //     "import-access/jsdoc": [
  //       "error",
  //       {
  //         defaultImportability: "public",
  //       },
  //     ],
  //   },
  // },
];

module.exports = config;
