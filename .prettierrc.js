module.exports = {
  importOrder: [
    '^react$',
    '^react-native$',
    '^react(.*)$',
    '^@react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^AppInner$',
    'src/navigators/(.*)$',
    'src/page/(.*)$',
    'src/contexts/(.*)$',
    'src/components/(.*)$',
    'src/hooks/(.*)$',
    'src/apis/(.*)$',
    'src/store(.*)$',
    'src/slices/(.*)$',
    'src/utils/(.*)$',
    'src/constants/(.*)$',
    'src/types/(.*)$',
    '^[./]',
  ],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  parser: 'typescript',
  overrides: [
    {
      files: ['*.mjs', '*.cjs', '*.js'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: ['*.mts', '*.cts', '*.ts'],
      options: {
        parser: 'babel-ts',
      },
    },
  ],
};
