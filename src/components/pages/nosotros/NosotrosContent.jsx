import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import BannerBig from "../../banners/BannerBig"
import BannerImg from "../../../assets/img/nosotros/bannerImg.jpg"
import NosotrosHistory from "./NosotrosHistory"
import NosotrosFeatures from "./NosotrosFeatures"
import NosotrosSubBanner from "./NosotrosSubBanner"

const NosotrosContent = () => {
  const intl = useIntl()

  return (
    <>
      <BannerBig
        image={BannerImg}
        text={intl.formatMessage({ id: "aboutUs.banner" })}
      />

      <NosotrosHistory />
      <NosotrosFeatures />
      <NosotrosSubBanner />
    </>
  )
}

export default NosotrosContent
