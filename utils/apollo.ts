import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

const GRAPHQL_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.datocms_api_token

const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
})

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
)
