import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const Applications = ({
  data: {
    datoCmsApplication: { applications },
  },
}) => (
  <Layout>
    <SEO title="Applications" />

    <h2>Applications</h2>

    <div className="content">{parse(applications)}</div>

    <Link to="/">Revenir à la page d'acceuil</Link>
  </Layout>
)

export const query = graphql`
  query {
    datoCmsApplication {
      applications
    }
  }
`

export default Applications
