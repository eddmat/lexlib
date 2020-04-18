import gql from 'graphql-tag'

const ABOUT_QUERY = gql`
  query About {
    post(filter: { title: { eq: "Acerca de" } }) {
      id
      content
    }
  }
`

export default ABOUT_QUERY
