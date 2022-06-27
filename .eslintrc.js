module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    amd: true,
  },
  globals: {
    Cesium: "readonly",
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "vue/multi-word-component-names": 0,
    "vue/attribute-hyphenation": 0,
    "vue/comment-directive": 0,
    "vue/v-on-event-hyphenation": 0,
    "no-empty": 0,
    "vue/require-default-prop": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-loss-of-precision": 0,
    "@typescript-eslint/no-loss-of-precision": 0,
  },
};
