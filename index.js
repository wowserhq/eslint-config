module.exports = {
  extends: [
    './rules/error',
    './rules/format',
    './rules/import',
    './rules/style',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  plugins: [
    'import',
  ],

  rules: {
    strict: 'error',
  },
};
