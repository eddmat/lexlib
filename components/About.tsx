import React from 'react'
import ABOUT_QUERY from '../queries/about'
import Query from '../components/Query'
import { AboutData } from '../utils/types'

const About = () => (
  <Query query={ABOUT_QUERY}>
    {({ data: { post } }: AboutData) => (
      <section className="about-container">
        <h3>Acerca de</h3>
        {post.content}
      </section>
    )}
  </Query>
)

export default About
