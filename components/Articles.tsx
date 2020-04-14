import React from 'react'
import POSTS_QUERY from '../apollo/queries/post/posts'
import Query from '../components/Query'

const Articles = () => (
  <Query query={POSTS_QUERY}>
    {({ data: { allPosts } }) => (
      <div className="container mx-auto">
        <section id="recent-area" className="posts-container">
          {allPosts.map((post: any) => (
            <article key={post.id} className="component">
              <h2>{post.title}</h2>

              <p>{post.excerpt}</p>
            </article>
          ))}
        </section>
      </div>
    )}
  </Query>
)

export default Articles
