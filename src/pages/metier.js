import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const Metier = ({
  data: {
    datoCmsJob: { job },
  },
}) => (
  <Layout>
    <SEO title="Mon métier" />

    <h2>Mon métier</h2>

    <div className="content">{parse(job)}</div>

    <Link to="/">Revenir à la page d'acceuil</Link>
  </Layout>
)

export const query = graphql`
  query {
    datoCmsJob {
      job
    }
  }
`

export default Metier
