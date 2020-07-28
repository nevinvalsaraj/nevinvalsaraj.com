import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/main.css'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            author {
              social {
                twitter
                github
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className='indexContainer'>
          <h1>
            <Link to='about'>about</Link>
          </h1>
          <h1>
            <Link to='projects'>projects</Link>
          </h1>
          <h1>
            <a
              href={`https://github.com/${data.site.siteMetadata.author.social.github}`}
              target='_blank'
              rel='noreferrer'
            >
              github
            </a>
          </h1>
          <h1>
            <a
              href={`https://twitter.com/${data.site.siteMetadata.author.social.twitter}`}
              target='_blank'
              rel='noreferrer'
            >
              twitter
            </a>
          </h1>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
