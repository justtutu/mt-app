module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    // 'plugin:prettier/recommended'
  ],
  // 校验 .vue 文件
  plugins: [
    'vue'
  ],
  // 自定义规则
  rules: {
    'semi': [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    // 'prettier/prettier': ['error', { 'semi': false }]
  }
}