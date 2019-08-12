const { override, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src', 'assets'),
  })
)
