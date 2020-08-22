import React from "react"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    datoCmsHomePage: { title },
  },
}) => {
  return (
    <Layout>
      <SEO title="Bienvenue" />
      <h1>{title}</h1>
      <p>
        Ullamco elit sunt elit ex elit adipisicing consectetur laboris labore.
      </p>
      <p>In cillum aute officia commodo eiusmod nulla.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      title
    }
  }
`

export default IndexPage
