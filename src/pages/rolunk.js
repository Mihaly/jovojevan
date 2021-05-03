import React from "react"
import { Helmet } from "react-helmet";
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function Rolunk() {
  return (
    <div>
      <Helmet title="Rólunk" defer={false} />
      <Header active="rolunk" />
      <Layout>
        <h2>Rólunk</h2>
        <p>Rólunk</p>
      </Layout>
      <Footer />
    </div>
  )
}
