import React from 'react'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const Tarif = ({ data: { datoCmsTarif: { tarif } } }) => {
  return (
    <Layout>
      <SEO title='Tarif' />

      <h2>Tarifs</h2>

      <div className='content'>{parse(tarif)}</div>

      <Link to='/'>Revenir à la page d'acceuil</Link>
    </Layout>
  )
}

export const query = graphql`{
    datoCmsTarif {
      tarif
    }
  }
`

export default Tarif
