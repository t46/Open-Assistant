import nextVitals from "eslint-config-next/core-web-vitals";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  ...nextVitals,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      eqeqeq: "warn",
    },
  },
];
