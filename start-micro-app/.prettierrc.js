module.exports = {
  printWidth: 160,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  endOfLine: 'lf',
  useTabs: false,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
