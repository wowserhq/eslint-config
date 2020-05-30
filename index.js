module.exports = {
  extends: [
    './rules/general/format',
    './rules/general/style',
    './rules/general/error',
    './rules/es2015/style',
    './rules/es2015/error',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: [
    'import',
  ],

  rules: {
    strict: 'error',
  },
};
