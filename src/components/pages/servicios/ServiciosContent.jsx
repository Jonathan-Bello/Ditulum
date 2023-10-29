import React from "react"
import BannerSmall from "../../../components/banners/BannerSmall"
import ServiBannerImg from "../../../assets/img/servicios/servibanner.jpg"

const ServiciosContent = () => {
  return (
    <>
      <BannerSmall
        text={
          "Convertimos cualquier espacio en el recinto perfecto que <b>conecte con el mundo natural</b>"
        }
        image={ServiBannerImg}
      />
    </>
  )
}

export default ServiciosContent
