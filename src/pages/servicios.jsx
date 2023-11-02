import React from "react"
import Layout from "../components/Layout"
import ServiciosContent from "../components/pages/servicios/ServiciosContent"

const ServiciosPage = ({ location }) => {
  const { state = {} } = location
  const { selectedServices } = state

  return (
    <Layout>
      <ServiciosContent initIndexService={selectedServices} />
    </Layout>
  )
}

export default ServiciosPage
