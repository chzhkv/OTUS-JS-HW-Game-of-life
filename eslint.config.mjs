// @ts-check
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";


export default tseslint.config(
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
      languageOptions: { globals: globals.browser }
    },
    {
      files: ["**/*.{js,mjs,cjs,ts}"]
    },
    {
      ignores: ["coverage/*", "dist/*"],
    },

    eslintConfigPrettier,
);

