module.exports = {

  rules: {

    // Ensure presence of super() in constructors (for derived classes)
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Ensure imports point to resolveable modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true
    }],

    // Ensure const variables are not reassigned or modified
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Ensure super() is called first in constructors (for derived classes)
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

  }

};
