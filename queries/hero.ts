import gql from 'graphql-tag'

const HERO_QUERY = gql`
  query Hero {
    allPosts(first: 1, filter: { title: { neq: "Acerca de" } }) {
      id
      title
      excerpt
      date
      slug
    }
  }
`

export default HERO_QUERY
