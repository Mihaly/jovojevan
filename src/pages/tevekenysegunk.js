import React from "react"
import { Helmet } from "react-helmet";
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function Tevekenysegunk() {
  return (
    <div>
      <Helmet title="Tevékenységünk" defer={false} />
      <Header active="tevekenysegunk" />
      <Layout>
        <h2>Tevékenységünk</h2>
        <h3>Krízis Központ Szentendrén</h3>
        <p>Tapasztalt szakemberek gyakorlati segítsége a krízishelyzetben lévő terhes nők számára Szentendrén.</p>
        <h4>Babakelengye Program</h4>
        <p>Egy általunk összeállított kelengyedobozzal támogatjuk a hozzánk forduló nőket.</p>
      </Layout>
      <Footer />
    </div>
  )
}
