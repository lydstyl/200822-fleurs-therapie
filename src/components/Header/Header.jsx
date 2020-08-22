import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Burger from "../Burger/Burger"

import MenuLinks from "../MenuLinks/MenuLinks"

import "./style.scss"

const Header = ({ siteTitle }) => (
  <>
    <div className="desktop-no-burger">
      <Burger />
    </div>

    <header>
      <div className="header-elements">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>

        <div className="desktop-menu-links">
          <MenuLinks isClass={false} />
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
