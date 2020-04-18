import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import POSTS_QUERY from '../queries/posts'
import Query from '../components/Query'
import When from '../components/When'
import ReactTouchEvents from 'react-touch-events'
import { PostsData } from '../utils/types'

const Posts = () => {
  const [swipe, setSwipe] = useState('')
  const [current, setCurrent] = useState(0)
  const [postsCount, setPostsCount] = useState(0)

  const handleSwipe = (direction: string) => {
    setSwipe(direction)

    if (current < postsCount) {
      if (direction === 'left') setCurrent(current + 1)

      if (direction === 'right') setCurrent(current - 1)
    }
  }

  useEffect(() => {
    const articlesElm = document.getElementsByClassName('post-card')
    const postsCount = articlesElm.length - 1

    setPostsCount(postsCount)
  }, [swipe])

  return (
    <Query query={POSTS_QUERY}>
      {({ data: { allPosts } }: PostsData) => (
        <section className="posts-container">
          <div className="post-card-container">
            {allPosts.map((post: any, index: number) => (
              <ReactTouchEvents key={post.id} onSwipe={handleSwipe}>
                <article
                  onClick={() => Router.push('/posts/[slug]', `/posts/${post.slug}`)}
                  className="post-card"
                  data-current={index === current}
                  data-direction={swipe}>
                  <div className="published-when">
                    <When dateTime={post.date} />
                  </div>
                  <h2>{post.title}</h2>

                  <p>{post.excerpt}</p>
                </article>
              </ReactTouchEvents>
            ))}
            <div className="post-container-clear"></div>
          </div>
          {/* <div className="post-short-container">
              <article className="post-short">
              <h2>Ejemplo 1</h2>
              <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              </p>
              </article>
              </div> */}
        </section>
      )}
    </Query>
  )
}

export default Posts
