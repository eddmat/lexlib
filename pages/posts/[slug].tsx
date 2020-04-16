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
        <section className="post-container">
          <header>
            <a href="https://creativecommons.org/licenses/by/4.0/deed.es" target="_blank">
              <i className="icon-creative-commons"></i>
              <i className="icon-creative-commons-attribution"></i> Obra bajo licencia Creative
              Commons Atribución 4.0 Internacional.
            </a>
            <aside>
              Del <Date dateTime={post.date} />
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
      )}
    </Query>
  )
}

export default Post
