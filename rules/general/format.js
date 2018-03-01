module.exports = {
  rules: {
    // Prohibit space before or after array brackets, apart from line breaks
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Require one true brace style, but allow single line braces
    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],

    // Require camelcased names, except for properties
    // https://eslint.org/docs/rules/camelcase
    'camelcase': ['error', {
      properties: 'never'
    }],

    // Require braces for control statements, except when control statement shares the line
    // https://eslint.org/docs/rules/curly
    'curly': ['error', 'multi-line'],

    // Require newlines at file end
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // Prohibit space between function name and opening call paren
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // Enforce 2-space indentation level, with 1 indentation level for several cases
    // https://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],

    // Require spacing before and after common keywords, except in certain cases
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // Require only-LF line breaks
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // Require newlines above and below directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // Limit line length to 100 and tab width to 2, except in certain cases
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Require parens when calling a constructor
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // Prohibit empty statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // Prohibit superfluous semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // Prohibit mixing of tabs and spaces
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Prohibit more than one consecutive empty line, and enforce only one newline at EOF
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1
    }],

    // Prohibit more than one consecutive space in RegExp literals
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Prohibit tab characters
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // Require padding inside curly braces
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Require all object properties to be on the same line, or one-per-line (not mixed)
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    // Require semicolons at the end of statements
    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // Require a space or newline before opening of blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': ['error', 'always'],

    // Require a space before function parenthesis in non-named functions
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // Prohibit spaces inside parens (immediately adjacent to paren)
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // Require spaces around operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Require spaces around placeholders in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // Prohibit the Unicode byte order marker
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],
  }
};
