module.exports = {
  rules: {
    // Ensure presence of super() in constructors (for derived classes)
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Ensure const variables are not reassigned or modified
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Ensure RegExp strings are valid
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Ensure super() is called first in constructors (for derived classes)
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow undeclared variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'error',
  },
};
