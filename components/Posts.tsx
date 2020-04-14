import React from 'react'
import POSTS_QUERY from '../apollo/queries/post/posts'
import Query from '../components/Query'
import When from '../components/When'

const Posts = () => (
  <Query query={POSTS_QUERY}>
    {({ data: { allPosts } }) => (
      <section className="posts-container">
        {allPosts.map((post: any) => (
          <article key={post.id} className="component">
            <When dateTime={post.date} />
            <h2>{post.title}</h2>

            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    )}
  </Query>
)

export default Posts
