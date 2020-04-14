import gql from 'graphql-tag'

const HERO_QUERY = gql`
  query Hero {
    allPosts(first: 1) {
      id
      title
      excerpt
      createdAt
    }
  }
`

export default HERO_QUERY
