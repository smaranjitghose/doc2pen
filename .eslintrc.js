module.exports = {

  env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": "off",
        "no-mixed-spaces-and-tabs": 0,
        "react/no-unescaped-entities": 0,
        indent: ["error", "tab", { SwitchCase: 1 }],
        "linebreak-style": 0,
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
};

