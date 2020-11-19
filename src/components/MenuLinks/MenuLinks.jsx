import React from "react"

import { Link } from "gatsby"

const MenuLinks = ({ handleClick, isClass }) => {
  return (
    <>
      <li>
        <Link onClick={handleClick} className={isClass ? "b-link" : ""} to="/">
          Accueil
        </Link>
      </li>

      <li>
        <Link
          onClick={handleClick}
          className={isClass ? "b-link" : ""}
          to="/origines/"
        >
          Origines
        </Link>
      </li>

      <li>
        <Link
          onClick={handleClick}
          className={isClass ? "b-link" : ""}
          to="/metier/"
        >
          Métier
        </Link>
      </li>

      <li>
        <Link
          onClick={handleClick}
          className={isClass ? "b-link" : ""}
          to="/applications/"
        >
          Applications
        </Link>
      </li>

      <li>
        <Link
          onClick={handleClick}
          className={isClass ? "b-link" : ""}
          to="/contact/"
        >
          Contact
        </Link>
      </li>
    </>
  )
}

export default MenuLinks
