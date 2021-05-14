module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: [
    'babel-eslint',
    '@typescript-eslint/parser'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/tsx-filename-extension': [
      'warn', {
        extensions: ['.tsx', '.ts', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
  },
};
