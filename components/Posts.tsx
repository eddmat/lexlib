import React, { useState, useEffect } from 'react'
import POSTS_QUERY from '../apollo/queries/post/posts'
import Query from '../components/Query'
import When from '../components/When'
import ReactTouchEvents from 'react-touch-events'

const handleSwipe = (direction: string) => {
  console.log('swiped', direction)
}

const handleTap = () => {
  console.log('tapped')
}

const Posts = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 660

      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <Query query={POSTS_QUERY}>
      {({ data: { allPosts } }) => (
        <section className="posts-container">
          {allPosts.map((post: any) => (
            <ReactTouchEvents key={post.id} onTap={handleTap} onSwipe={handleSwipe}>
              <article>
                <div className="published-when">
                  <When dateTime={post.date} />
                </div>
                <h2>{post.title}</h2>

                <p>{post.excerpt}</p>
              </article>
            </ReactTouchEvents>
          ))}
        </section>
      )}
    </Query>
  )
}

export default Posts
