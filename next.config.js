require('dotenv').config()

const withFonts = require('next-fonts')

module.exports = withFonts({
  env: {
    datocms_api_token: process.env.datocms_api_token,
  },
})
