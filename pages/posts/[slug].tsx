import React from 'react'
import { useRouter } from 'next/router'
import Query from '../../components/Query'
import Date from '../../components/Date'
import POST_QUERY from '../../apollo/queries/post/post'
import ReactMarkdown from 'react-markdown'

const Post = () => {
  const router = useRouter()
  console.log(router)

  return (
    <Query query={POST_QUERY} slug={router.query.slug}>
      {({ data: { post } }) => (
        <main className="container">
          <section className="post-container">
            <header>
              <a href="https://creativecommons.org/licenses/by/4.0/deed.es" target="_blank">
                <span className="cc">c</span>
                <span className="cc">b</span> Obra bajo licencia Creative Commons Atribución 4.0
                Internacional.
              </a>
              <aside>
                Del <Date dateTime={post.createdAt} />
              </aside>
            </header>

            <article>
              <hgroup>
                <h2>{post.title}</h2>
                <h3>{post.excerpt}</h3>
              </hgroup>
              <ReactMarkdown source={post.content} escapeHtml={false}></ReactMarkdown>
            </article>
          </section>
        </main>
      )}
    </Query>
  )
}

export default Post
