module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    // 关闭规则
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-var': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // 错误提示
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    // 告警提示
    "jest/no-disabled-tests": "warn",
    "jest/prefer-to-have-length": "warn",
  }
}
