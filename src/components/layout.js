import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from '../components/header'
import '../styles/global.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
    render={data => (
      <>
        <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}>
          {children}
        </div>
      </>
    )}
  />
)

export default Layout;
