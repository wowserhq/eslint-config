module.exports = {
  rules: {
    // Require type-safe equality comparisons, except when comparing with null literals
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always', {
      'null': 'ignore',
    }],

    // Warn on use of console
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // Prohibit overwriting / reassigning exception objects
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Prohibit overwriting / reassigning function declarations
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Prohibit variable redeclarations
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Prohibit variable assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // Prohibit unreachable code after return, throw, continue, or break
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Prohibit left-side operand negation with relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Prohibit padding at beginning/end of blocks, classes and switch statements
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],

    // Prohibit invalid JSDoc annotations (when present)
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'error',
  },
};
