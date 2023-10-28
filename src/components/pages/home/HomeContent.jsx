import React from "react"
import Banner from "../../banners/Banner"
import BannerImg from "../../../assets/img/home/mainbanner.jpg"
import HomeServiciosSection from "./HomeServiciosSection"
import HomeFeaturesSection from "./HomeFeaturesSection"

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
      <HomeFeaturesSection />
    </>
  )
}

export default HomeContent
