import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'
import { Helmet } from 'react-helmet'
import '../styles.scss'

interface Props {
  Component: any
  pageProps: any
  apollo: any
}

const App = ({ Component, pageProps, apollo }: Props) => {
  const title = 'Léxico Libertario'
  const description = 'Ensayos libertarios y registros generacionales'

  return (
    <ApolloProvider client={apollo}>
      <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@upthecomputers" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      <main className="container">
        <Nav />

        <Component {...pageProps} />

        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default withData(App)
