import React from 'react'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const Presentation = ({ data: { datoCmsPresentation: { presentation } } }) => {
  return (
    <Layout>
      <SEO title='Presentation' />

      <h2>Presentation</h2>

      <div className='content'>{parse(presentation)}</div>

      <Link to='/'>Revenir à la page d'acceuil</Link>
    </Layout>
  )
}

export const query = graphql`{
    datoCmsPresentation {
      presentation
    }
  }
`

export default Presentation
