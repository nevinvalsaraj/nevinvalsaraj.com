import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <div>
    <h1>About</h1>
    <p>Hi, I'm a software engineer currently employed at Microsoft.</p>
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
      <a href="https://www.gatsbyjs.org/">GatsbyJS</a>.
    </p>

    <hr />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default About
