/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@import "./styles/theming";',
  },
}

const { withGlobalCss } = require('next-global-css')

const withConfig = withGlobalCss()

module.exports = withConfig(config)
