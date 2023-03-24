module.exports = {
  root: true,

  env: {
    node: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
  },

  ignorePatterns: ["dist", "node_modules"],

  extends: [
    "plugin:vue/base",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
  ],

  plugins: ["@typescript-eslint", "prettier", "simple-import-sort", "import"],

  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "prettier/prettier": ["error"],
    "vue/require-default-prop": "off",
    "vue/html-indent": ["error", 2],
    "vue/singleline-html-element-content-newline": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: 6,
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
      },
    ],
    "import/named": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // side effects
          ["^\\u0000"],
          // node.js libraries and scoped libraries
          ["^(child_process|crypto|events|fs|http|https|os|path)(/.*)?$", "^@?\\w"],
          // alias imports
          ["^@app"],
          // relative imports
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },

  settings: {
    "import/extensions": [".js", ".ts", ".vue"],
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".ts", ".vue"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".vue"],
        project: ["tsconfig.json", "./tsconfig.json"],
      },
      typescript: {
        project: ["tsconfig.json", "./tsconfig.json"],
      },
    },
  },
};
