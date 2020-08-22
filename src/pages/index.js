import React from "react"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Bienvenue" />
    <h1>Bienvenue</h1>
    <p>
      Ullamco elit sunt elit ex elit adipisicing consectetur laboris labore.
    </p>
    <p>In cillum aute officia commodo eiusmod nulla.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
