import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const Header2 = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <p>
      <Link to="/origines/">Origines</Link>
      <br />
      <Link to="/metier/">Mon métier</Link>
      <br />
      <Link to="/contact/">Contact</Link>
    </p>
  </header>
)

Header2.propTypes = {
  siteTitle: PropTypes.string,
}

Header2.defaultProps = {
  siteTitle: ``,
}

export default Header2
