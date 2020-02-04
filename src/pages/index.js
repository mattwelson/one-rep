import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Calculator from "../components/calculator"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Calculator />

    <About />
  </Layout>
)

export default IndexPage
