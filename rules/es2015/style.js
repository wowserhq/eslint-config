module.exports = {
  rules: {
    // Require import statements to appear before non-import statements (absolute-before-relative)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': ['error', 'absolute-first'],

    // Require a blank line separator after the last import statement
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Prohibit use of absolute paths in import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Prohibit use of expressions in require statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Prohibit duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Prohibit Webpack-specific loader syntax in import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': 'error',

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // Prohibit silently overriding class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Prohibit constructors when default is sufficient
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Require variables to be declared with let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Suggest using const
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'error',

    // Require template literals instead of string concat
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',
  },
};
