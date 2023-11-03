import React from "react"
import BannerBig from "../../banners/BannerBig"
import BannerImg from "../../../assets/img/nosotros/bannerImg.jpg"
import NosotrosHistory from "./NosotrosHistory"
import NosotrosFeatures from "./NosotrosFeatures"

const NosotrosContent = () => {
  return (
    <>
      <BannerBig
        image={BannerImg}
        text={"Aquí es donde <b>todo comienza</b>"}
      />

      <NosotrosHistory />
      <NosotrosFeatures />
    </>
  )
}

export default NosotrosContent
