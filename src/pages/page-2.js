import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Svg from '../components/Svg'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Svg />

    <div className="relative">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
