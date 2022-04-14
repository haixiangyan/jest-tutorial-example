module.exports = {
  '**/*.{ts,tsx,js,jsx}': [
    () => 'tsc --noEmit',
    "eslint --cache --fix",
  ],
}
