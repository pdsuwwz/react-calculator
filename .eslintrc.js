const eslintConfig = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals":{
    "console": true
  },
  "settings": {
    "react": {
      "version": "16.5"
    }
  },
  "extends": [
    "standard",
    "plugin:react/recommended",
  ],
  "plugins": ["react", 'jsx-a11y'],
  "rules": {
    "no-var": 1,
    "no-alert": 2,
    "eqeqeq": "off", // 恒等比较
    "no-self-assign": "off",
    "no-ternary": 0,
    "standard/no-callback-literal": 0,
    "func-call-spacing": 0,
    "prefer-promise-reject-errors": 0,
    "no-unused-vars": 1,
    "no-debugger": 1,
    "no-console": 1,
    'no-useless-constructor': "off"
  }
};

module.exports = eslintConfig;