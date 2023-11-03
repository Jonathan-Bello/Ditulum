import React from "react"
import BannerBig from "../../banners/BannerBig"
import BannerImg from "../../../assets/img/nosotros/bannerImg.jpg"
import NosotrosHistory from "./NosotrosHistory"

const NosotrosContent = () => {
  return (
    <>
      <BannerBig
        image={BannerImg}
        text={"Aquí es donde <b>todo comienza</b>"}
      />

      <NosotrosHistory />
    </>
  )
}

export default NosotrosContent
