import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'
import { ApolloData } from '../utils/types'
import { DefaultSeo } from 'next-seo'
import '../styles.scss'

const App = ({ Component, pageProps, apollo }: ApolloData) => {
  const [origin, setOrigin] = useState('')

  useEffect(() => setOrigin(window.location.origin))

  return (
    <ApolloProvider client={apollo}>
      <main className="container">
        <DefaultSeo
          titleTemplate="%s | Léxico Libertario"
          description="Ensayos libertarios y registros generacionales"
          openGraph={{
            type: 'website',
            locale: 'es_UY',
            images: [
              {
                url: `${origin}/og-image.jpeg`,
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
