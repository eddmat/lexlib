import React from 'react'
import { useQuery } from '@apollo/react-hooks'

interface Props {
  children: any
  query: any
  slug?: any
}

const Query = ({ children, query, slug }: Props) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  return children({ data })
}

export default Query
