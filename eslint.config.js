import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import eslintJsPlugin from "@eslint/js";

export default [
  {
    rules: eslintJsPlugin.configs.recommended.rules,
  },

  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsParser,
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
    },

    rules: {
      ...tsPlugin.configs.recommended.rules,
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
    }
  }
];

