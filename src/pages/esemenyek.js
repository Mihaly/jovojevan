import React from "react"
import { Helmet } from "react-helmet";
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function Esemenyek() {
  return (
    <div>
      <Helmet title="Események" defer={false} />
      <Header active="esemenyek" />
      <Layout>
        <h2>Események</h2>
        <p>Események tartalom</p>
      </Layout>
      <Footer />
    </div>
  )
}
