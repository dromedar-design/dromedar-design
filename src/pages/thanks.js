import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>You have submitted stuff</h1>
    <p>Thanks!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
