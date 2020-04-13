import gql from 'graphql-tag'

const POSTS_QUERY = gql`
  query Posts {
    allPosts {
      id
      title
      content
    }
  }
`

export default POSTS_QUERY
