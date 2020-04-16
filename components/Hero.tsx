import React from 'react'
import Link from 'next/link'
import HERO_QUERY from '../apollo/queries/post/hero'
import Query from '../components/Query'
import When from '../components/When'

const Hero = () => (
  <Query query={HERO_QUERY}>
    {({ data: { allPosts } }) => (
      <div className="main-header">
        <div className="hero-bg"></div>
        <Link as={`/posts/${allPosts[0].slug}`} href="/posts/[slug]">
          <article>
            <div className="published-when">
              <When dateTime={allPosts[0].createdAt} />
            </div>
            <h1>
              <span>{allPosts[0].title}</span>
            </h1>
            <p>{allPosts[0].excerpt}</p>
          </article>
        </Link>
      </div>
    )}
  </Query>
)

export default Hero
