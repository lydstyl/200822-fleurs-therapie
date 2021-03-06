import React from 'react'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const Origines = ({
  data: {
    datoCmsOrigin: { content }
  }
}) => {
  return (
    <Layout>
      <SEO title='Origines' />
      <h2>Origines</h2>

      <div className='content'>{parse(content)}</div>

      <Link to='/'>Revenir à la page d'acceuil</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    datoCmsOrigin {
      content
    }
  }
`

export default Origines
