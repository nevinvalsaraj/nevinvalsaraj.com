import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

const About = () => (
  <Layout>
    <Helmet>
      <title>~/about</title>
    </Helmet>
    <div className="aboutContainer">
      <h1>About</h1>
      <p>Hello there!</p>
      <p>I'm a software engineer at Microsoft.</p>
      <p>
        I have the dubious honour of being a Linux-savvy MacBook-user in a world
        of Windows experts.
      </p>
      <p>
        I also love literature, but I keep subverting my own efforts in blogging
        by repeatedly rebuilding this website and blog with the year's flavor of
        JavaScript frameworks.
      </p>
      <p>
        This website is built using the wonderfully fast{' '}
        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">GatsbyJS</a>.
      </p>

      <hr />
      <Link to="/">Back to home</Link>
    </div>
  </Layout>
)

export default About
