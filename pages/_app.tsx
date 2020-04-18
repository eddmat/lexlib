import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'
import { ApolloData, SiteData } from '../utils/types'
import Query from '../components/Query'
import SITE_QUERY from '../queries/site'
import { DefaultSeo } from 'next-seo'
import '../styles.scss'

const App = ({ Component, pageProps, apollo }: ApolloData) => {
  return (
    <ApolloProvider client={apollo}>
      <main className="container">
        <Query query={SITE_QUERY}>
          {({ data: { _site } }: SiteData) => (
            <DefaultSeo
              title={_site.globalSeo.siteName}
              titleTemplate={`%s | ${_site.globalSeo.siteName}`}
              description={_site.globalSeo.fallbackSeo.description}
              openGraph={{
                type: 'website',
                locale: 'es_UY',
                images: [
                  {
                    url: _site.globalSeo.fallbackSeo.image.url,
                  },
                ],
              }}
              twitter={{
                handle: _site.globalSeo.fallbackSeo.twitterAccount,
                cardType: 'summary',
              }}
            />
          )}
        </Query>
        <Nav />

        <Component {...pageProps} />

        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default withData(App)
