import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'
import '../styles.scss'

interface Props {
  Component: any
  pageProps: any
  apollo: any
}

const App = ({ Component, pageProps, apollo }: Props) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Lexico Libertario</title>
      </Head>

      <main className="container">
        <Nav />

        <Component {...pageProps} />

        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default withData(App)
