import React from "react"
import { Helmet } from "react-helmet";
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function Tagozatok() {
  return (
    <div>
      <Helmet title="Tagozatok" defer={false} />
      <Header active="tagozatok" />
      <Layout>
        <h2>Tagozatok</h2>
        <p>Tagozatok</p>
      </Layout>
      <Footer />
    </div>
  )
}
