import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>
      ~ <Link to="about">about</Link>
    </h1>
    <h1>
      ~ <Link to="projects">projects</Link>
    </h1>
    <h1>
      ~ <a href="https://github.com/nevinvalsaraj">github</a>
    </h1>
  </div>
)

export default IndexPage
