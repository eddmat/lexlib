import React from 'react'
import ABOUT_QUERY from '../apollo/queries/post/about'
import Query from '../components/Query'

const About = () => (
  <Query query={ABOUT_QUERY}>
    {({ data: { post } }) => (
      <section className="about-container">
        <h3>Acerca de</h3>
        {post.content}
      </section>
    )}
  </Query>
)

export default About
