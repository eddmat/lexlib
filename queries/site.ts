import gql from 'graphql-tag'

const SITE_QUERY = gql`
  query Site {
    _site(locale: es) {
      globalSeo(locale: es) {
        siteName
        fallbackSeo {
          description
          image {
            url
          }
        }
        twitterAccount
      }
    }
  }
`
export default SITE_QUERY
