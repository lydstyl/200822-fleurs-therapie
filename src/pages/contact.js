import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const Contact = ({
  data: {
    datoCmsContact: { contact },
  },
}) => (
  <Layout>
    <SEO title="Contact" />

    <h1>Contact</h1>

    <div className="content">{parse(contact)}</div>

    <Link to="/">Revenir à la page d'acceuil</Link>
  </Layout>
)

export const query = graphql`
  query {
    datoCmsContact {
      contact
    }
  }
`

export default Contact
