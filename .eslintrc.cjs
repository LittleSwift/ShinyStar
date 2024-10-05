/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },

    rules: {
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-extra-semi": "error",
    },

    // Base config
    extends: ["eslint:recommended"],

    overrides: [
        // Vue
        {
            files: ["**/*.{vue}"],
            plugins: ["vue"],
            extends: [
                "plugin:vue/recommended",
            ],
        },

        // Typescript
        {
            files: ["**/*.{ts,tsx}"],
            plugins: ["@typescript-eslint", "import"],
            parser: "@typescript-eslint/parser",
            settings: {
                "import/internal-regex": "^~/",
                "import/resolver": {
                    node: {
                        extensions: [".ts", ".tsx"],
                    },
                    typescript: {
                        alwaysTryTypes: true,
                    },
                },
            },
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:import/recommended",
                "plugin:import/typescript",
            ],
        },

        // Node
        {
            files: [".eslintrc.cjs"],
            env: {
                node: true,
            },
        },
    ],
};
