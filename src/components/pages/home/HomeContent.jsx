import React from "react"
import Banner from "../../banners/Banner"
import BannerImg from "../../../assets/img/home/mainbanner.jpg"
import HomeServiciosSection from "./HomeServiciosSection"

const HomeContent = () => {
  return (
    <>
      <Banner
        image={BannerImg}
        text={
          "Encuentra el <b>equilibrio entre la naturaleza y los espacios</b> que habitas"
        }
      />

      <HomeServiciosSection />
    </>
  )
}

export default HomeContent
