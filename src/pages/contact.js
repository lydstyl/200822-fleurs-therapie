import React from 'react'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const Contact = ({
  data: {
    datoCmsContact: { contact }
  }
}) => (
  <Layout>
    <SEO title='Contact' />

    <h2>Contact</h2>

    <div className='content'>{parse(contact)}</div>

    <form method='post' netlify-honeypot='bot-field' data-netlify='true' name='contact'>
      <input type='hidden' name='bot-field' />
      <input type='hidden' name='form-name' value='contact' />

      <label>
        Nom
        <input type='text' name='name' id='name' />
      </label>
      <label>
        Email
        <input type='email' name='email' id='email' />
      </label>
      <label>
        Téléphone
        <input
          type='tel' id='phone' name='phone'
          // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          required
        />
      </label>

      <label>
        Message
        <textarea name='message' id='message' rows='5' />
      </label>

      <div className='buttons'>

        <button type='submit'>Envoyer</button>
        <input type='reset' value='Effacer' />
      </div>
    </form>

    <Link to='/'>Revenir à la page d'acceuil</Link>
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
