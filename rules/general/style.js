module.exports = {

  rules: {

    // Require type-safe equality comparisons, except when comparing with null literals
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always', {
      'null': 'ignore'
    }],

    // Warn on use of console
    // http://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // Prohibit overwriting / reassigning exception objects
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Prohibit overwriting / reassigning function declarations
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Prohibit variable redeclarations
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Prohibit variable assignment in return statement
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // Prohibit unreachable code after return, throw, continue, or break
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Prohibit left-side operand negation with relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Prohibit invalid JSDoc annotations (when present)
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'error'

  }

};
