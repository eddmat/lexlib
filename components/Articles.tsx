import React from 'react'
import POSTS_QUERY from '../apollo/queries/article/posts'
import Query from '../components/Query'
import ReactMarkdown from 'react-markdown'

const Articles = () => (
  <Query query={POSTS_QUERY}>
    {({ data: { allPosts } }) => (
      <div className="container mx-auto">
        <section id="recent-area" className="articles-container">
          {allPosts.map(post => (
            <article key={post.id} className="component">
              <h2>{post.title}</h2>

              <ReactMarkdown source={post.content} />
              <div className="fade-effect"></div>
            </article>
          ))}
        </section>
      </div>
    )}
  </Query>
)

export default Articles
