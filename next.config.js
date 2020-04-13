require('dotenv').config()

const withFonts = require('next-fonts')

module.exports = withFonts({
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
})
