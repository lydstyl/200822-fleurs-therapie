import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
// import Image from "../components/image"

import "./style.scss"

const IndexPage = ({ data: { datoCmsHomePage } }) => {
  const {
    title,
    image,
    introNode: {
      childMarkdownRemark: { html },
    },
  } = datoCmsHomePage

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>

      <div className="intro">{parse(html)}</div>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <article>
        <Img fluid={image.fluid} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      title
      image {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      introNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default IndexPage
