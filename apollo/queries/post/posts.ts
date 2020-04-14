import gql from 'graphql-tag'

const POSTS_QUERY = gql`
  query Posts {
    allPosts(skip: 1, orderBy: _createdAt_DESC) {
      id
      title
      excerpt
      date
    }
  }
`

export default POSTS_QUERY
