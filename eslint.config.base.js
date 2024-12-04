/* eslint-disable @typescript-eslint/no-require-imports */

const javaScriptPlugin = require("@eslint/js");
const typeScriptPlugin = require("@typescript-eslint/eslint-plugin");
const typeScriptParserPlugin = require("@typescript-eslint/parser");
const formatPlugin = require("eslint-plugin-format");
const importPlugin = require("eslint-plugin-import");
const globals = require("globals");

const config = [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
  /* javascript用のルール */
  {
    name: "javascript/rules",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
      },
    },
    rules: javaScriptPlugin.configs.recommended.rules,
  },
  /* typescriptの準備 */
  {
    name: "typescript/parser",
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typeScriptParserPlugin,
      parserOptions: {
        sourceType: "module",
      },
    },
  },
  /* typescript用のルール */
  {
    name: "typescript/rules",
    plugins: {
      "@typescript-eslint": typeScriptPlugin,
    },
    rules: {
      ...typeScriptPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
  /* import用のルール */
  {
    name: "imports/rules",
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/newline-after-import": ["error", { count: 1 }],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/first": "error",
    },
  },
  /* prettier用のルール */
  {
    name: "formatter/rules",
    plugins: {
      format: formatPlugin,
    },
    rules: {
      "format/prettier": [
        "error",
        {
          doubleQuote: true,
        },
      ],
    },
  },
];

// export default config;
module.exports = config;
