import gql from 'graphql-tag'

const POST_QUERY = gql`
  query Posts($slug: String) {
    post(filter: { slug: { eq: $slug } }) {
      id
      title
      excerpt
      content
      date
      slug
    }
  }
`
export default POST_QUERY
