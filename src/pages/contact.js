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
        Name
        <input type='text' name='name' id='name' />
      </label>
      <label>
        Email
        <input type='email' name='email' id='email' />
      </label>
      <label>
        Subject
        <input type='text' name='subject' id='subject' />
      </label>
      <label>
        Message
        <textarea name='message' id='message' rows='5' />
      </label>
      <button type='submit'>Send</button>
      <input type='reset' value='Clear' />
    </form>

    <form name='contact' method='POST' data-netlify='true'>
      <p>
        <label>Votre nom: <input type='text' name='name' /></label>
      </p>
      <p>
        <label>Votre Email: <input type='email' name='email' /></label>
      </p>
      <p>
        <label>Message: <textarea name='message' /></label>
      </p>
      <p>
        <button type='submit'>Envoyer</button>
      </p>
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
