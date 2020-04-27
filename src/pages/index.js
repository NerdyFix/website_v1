import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Welcome</h1>
    <p>Our technology consulting services will help you meet your personal and coorporate needs</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
