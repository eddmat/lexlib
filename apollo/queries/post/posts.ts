import gql from 'graphql-tag'

const POSTS_QUERY = gql`
  query Posts {
    allPosts(skip: 1, orderBy: _createdAt_DESC, filter: { title: { neq: "Acerca de" } }) {
      id
      title
      excerpt
      createdAt
      date
    }
  }
`
export default POSTS_QUERY
