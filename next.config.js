const path = require("path")

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  output: "standalone",

  include: path.resolve(__dirname, "public/"),

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
