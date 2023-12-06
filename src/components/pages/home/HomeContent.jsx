import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Banner from "../../banners/Banner"
import BannerImg from "../../../assets/img/home/mainbanner.jpg"
import HomeServiciosSection from "./HomeServiciosSection"
import HomeFeaturesSection from "./HomeFeaturesSection"
import HomeInstagramSection from "./HomeInstagramSection"

const HomeContent = () => {
  const intl = useIntl()

  return (
    <>
      <Banner image={BannerImg} text={intl.formatMessage({ id: "home.banner" })} />
      <HomeServiciosSection />
      <HomeFeaturesSection />
      <HomeInstagramSection />
    </>
  )
}

export default HomeContent
