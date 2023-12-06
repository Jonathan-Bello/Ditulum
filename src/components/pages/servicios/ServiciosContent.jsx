import React, { useEffect, useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import BannerSmall from "../../../components/banners/BannerSmall"
import ServiBannerImg from "../../../assets/img/servicios/servibanner.jpg"
import ServiciosFlatList from "./ServiciosFlatList"
import ServiciosTitleBanner from "./ServiciosTitleBanner"

import serviciosData from "./serviciosData"
import ServiciosDetails from "./ServiciosDetails"
import ServiciosCarousel from "./ServiciosCarousel"

const ServiciosContent = ({ initIndexService }) => {
  const intl = useIntl()
  const data = serviciosData()

  const [selectedServiceIndex, setSetselectedServiceIndex] = useState(
    initIndexService ? initIndexService : 0
  )
  const [selectedService, setSetselectedService] = useState(
    data[selectedServiceIndex]
  )

  useEffect(() => {
    setSetselectedService(data[selectedServiceIndex])
  }, [selectedServiceIndex])

  return (
    <>
      <BannerSmall
        text={intl.formatMessage({ id: "services.banner" })}
        image={ServiBannerImg}
      />
      <br />
      <ServiciosFlatList
        selectedServiceIndex={selectedServiceIndex}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <ServiciosTitleBanner {...selectedService} />
      <ServiciosDetails {...selectedService} />
      <ServiciosCarousel {...selectedService} />
    </>
  )
}

export default ServiciosContent
