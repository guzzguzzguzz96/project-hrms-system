module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        // Custom rules can be added here
      },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      rules: {
        // Custom rules can be added here
      },
    },
  ],
};