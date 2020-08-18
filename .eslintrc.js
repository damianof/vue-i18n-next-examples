module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/vue3-essential",
	  "@vue/typescript"
  ],
  parserOptions: {
    //ecmaVersion: 2020
	  parser: "@typescript-eslint/parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "one-var": 0,
    "no-tabs": 0,
    "indent": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-multiple-empty-lines": 0,
    "@typescript-eslint/no-explicit-any": 0
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
}
