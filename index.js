module.exports = {
  extends: [
    './rules/general/format',
    './rules/general/style',
    './rules/general/error',
    './rules/es2015/style',
    './rules/es2015/error'
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  plugins: [
    'import'
  ],

  rules: {
    strict: 'error',
  }
};
