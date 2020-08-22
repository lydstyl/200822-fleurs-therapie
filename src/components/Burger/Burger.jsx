import React, { useState } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import "./style.scss"

const Burger = ({ siteTitle }) => {
  const [open, setOpen] = useState("")

  const handleClick = () => {
    const body = document.body

    open === "" ? setOpen("open") : setOpen("")

    body.classList.toggle("open")
  }

  const handleClick2 = () => {
    const body = document.body

    body.classList.toggle("open")
  }

  return (
    <>
      {/* Navigation */}
      <div className={`b-nav ${open}`}>
        <li>
          <Link onClick={handleClick2} className="b-link" to="/">
            Accueil
          </Link>
        </li>

        <li>
          <Link onClick={handleClick2} className="b-link" to="/origines/">
            Origines
          </Link>
        </li>

        <li>
          <Link onClick={handleClick2} className="b-link" to="/metier/">
            Mon métier
          </Link>
        </li>

        <li>
          <Link onClick={handleClick2} className="b-link" to="/contact/">
            Contact
          </Link>
        </li>
      </div>

      {/* Burger-Icon */}
      <div className={`b-container ${open}`}>
        {/* eslint-disable-next-line */}
        <div className="b-menu" onClick={handleClick}>
          <div className="b-bun b-bun--top"></div>
          <div className="b-bun b-bun--mid"></div>
          <div className="b-bun b-bun--bottom"></div>
        </div>
      </div>
    </>
  )
}

Burger.propTypes = {
  siteTitle: PropTypes.string,
}

Burger.defaultProps = {
  siteTitle: ``,
}

export default Burger
