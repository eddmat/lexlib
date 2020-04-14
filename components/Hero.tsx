import React from 'react'
import HERO_QUERY from '../apollo/queries/post/hero'
import Query from '../components/Query'
import When from '../components/When'

const Hero = () => (
  <Query query={HERO_QUERY}>
    {({ data: { allPosts } }) => (
      <div className="container">
        <section className="main-header">
          <article>
            <div className="published-when">
              <When dateTime={allPosts[0].createdAt} />
            </div>
            <h1>{allPosts[0].title}</h1>
            <p>{allPosts[0].excerpt}</p>
          </article>
        </section>
      </div>
    )}
  </Query>
)

export default Hero
