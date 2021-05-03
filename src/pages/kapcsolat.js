import React from "react"
import { Helmet } from "react-helmet";
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function Kapcsolat() {
  return (
    <div>
      <Helmet title="Kapcsolat" defer={false} />
      <Header active="kapcsolat" />
      <Layout>
        <h2>Kapcsolat</h2>
        <p>Kapcsolat content</p>
      </Layout>
      <Footer />
    </div>
  )
}
