import React, { useEffect, useState } from "react"
import BannerSmall from "../../../components/banners/BannerSmall"
import ServiBannerImg from "../../../assets/img/servicios/servibanner.jpg"
import ServiciosFlatList from "./ServiciosFlatList"
import ServiciosTitleBanner from "./ServiciosTitleBanner"

import serviciosData from "./serviciosData"

const ServiciosContent = () => {
  const [selectedService, setSetselectedService] = useState(serviciosData[0])
  const [selectedServiceIndex, setSetselectedServiceIndex] = useState(0)

  useEffect(() => {
    setSetselectedService(serviciosData[selectedServiceIndex])
  }, [selectedServiceIndex])

  return (
    <>
      <BannerSmall
        text={
          "Convertimos cualquier espacio en el recinto perfecto que <b>conecte con el mundo natural</b>"
        }
        image={ServiBannerImg}
      />
      <br />
      <ServiciosFlatList
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <ServiciosTitleBanner {...selectedService} />
    </>
  )
}

export default ServiciosContent
