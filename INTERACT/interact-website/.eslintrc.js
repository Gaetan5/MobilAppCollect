module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:tailwindcss/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'tailwindcss'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/no-custom-classname': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};