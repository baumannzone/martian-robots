module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    jest: true,
    "jest/globals": true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'brace-style': ['error', 'stroustrup']
  },
  plugins: ['jest']
}
