import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Metier = () => (
  <Layout>
    <SEO title="Mon métier" />
    <h1>Mon métier</h1>
    <p>
      Proident occaecat anim commodo non ad ex. Anim eu qui minim nulla occaecat
      velit deserunt. Enim nisi do id eu enim elit cillum officia. Pariatur ex
      eu adipisicing labore mollit cillum culpa ea eiusmod. Velit cupidatat
      adipisicing ex amet officia exercitation ea nostrud.
    </p>

    <p>
      Occaecat Lorem dolor incididunt ea nulla deserunt quis. Voluptate irure
      veniam cillum minim mollit ex cupidatat irure excepteur aliqua consectetur
      anim mollit nulla. Irure minim aliquip in consectetur officia proident
      enim nisi do tempor. In velit aliquip reprehenderit eiusmod amet. Veniam
      consectetur aute nulla tempor nostrud ea duis veniam aliquip veniam.
      Aliquip cillum sit qui in officia amet laboris. Esse elit ut est pariatur
      magna ut magna cillum aute eiusmod ut.
    </p>

    <Link to="/">Revenir à la page d'acceuil</Link>
  </Layout>
)

export default Metier
