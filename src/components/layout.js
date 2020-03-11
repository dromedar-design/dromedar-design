/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import '../css/tailwind.css'
import Header from './header'
import Menu from './menu/Menu'
import './menu/styles.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:wght@400;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {false && <Header siteTitle={data.site.siteMetadata.title} />}

      <Menu />

      <div>
        <main>{children}</main>

        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
