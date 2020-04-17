import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'
import { ApolloData } from '../utils/types'
import { DefaultSeo } from 'next-seo'
import '../styles.scss'

const App = ({ Component, pageProps, apollo }: ApolloData) => {
  const [host, setHost] = useState('')

  useEffect(() => setHost(window.location.host))
  return (
    <ApolloProvider client={apollo}>
      <main className="container">
        <DefaultSeo
          title="Léxico Libertario"
          titleTemplate="%s | Léxico Libertario"
          description="Ensayos libertarios y registros generacionales"
          openGraph={{
            type: 'website',
            locale: 'es_UY',
            images: [
              {
                url: `${host}/og-image.jpeg`,
              },
            ],
          }}
          twitter={{
            handle: '@upthecomputers',
            cardType: 'summary',
          }}
        />
        <Nav />

        <Component {...pageProps} />

        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default withData(App)
