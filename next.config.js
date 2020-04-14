require('dotenv').config()

const withFonts = require('next-fonts')

module.exports = withFonts({
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
  },
})
