import React, { useState, useEffect } from 'react'
import POSTS_QUERY from '../apollo/queries/post/posts'
import Query from '../components/Query'
import When from '../components/When'
import ReactTouchEvents from 'react-touch-events'

const handleTap = () => {
  console.log('tapped')
}

const Posts = () => {
  const [swipe, setSwipe] = useState('')
  const [current, setCurrent] = useState(0)
  const [postsCount, setPostsCount] = useState(0)

  const handleSwipe = (direction: string) => {
    setSwipe(direction)

    if (current < postsCount) {
      console.log(current, postsCount)
      if (direction === 'left') setCurrent(current + 1)

      if (direction === 'right') setCurrent(current - 1)
    }
  }

  useEffect(() => {
    const articlesElm = document.getElementsByClassName('post')
    const postsCount = articlesElm.length - 1

    setPostsCount(postsCount)
  }, [swipe])

  return (
    <Query query={POSTS_QUERY}>
      {({ data: { allPosts } }) => (
        <section className="posts-container">
          {allPosts.map((post: any, index: number) => (
            <ReactTouchEvents key={post.id} onTap={handleTap} onSwipe={handleSwipe}>
              <article className="post" data-current={index === current} data-direction={swipe}>
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
