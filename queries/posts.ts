import gql from 'graphql-tag'

const POSTS_QUERY = gql`
  query Posts {
    allPosts(skip: 1, filter: { title: { neq: "Acerca de" } }) {
      id
      title
      excerpt
      date
      slug
    }
  }
`
export default POSTS_QUERY
