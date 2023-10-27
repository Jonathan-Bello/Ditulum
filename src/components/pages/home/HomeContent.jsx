import React from "react"
import Banner from "../../banners/Banner"
import BannerImg from "../../../assets/img/home/mainbanner.jpg"

const HomeContent = () => {
  return (
    <>
      <Banner
        image={BannerImg}
        text={
          "Encuentra el <b>equilibrio entre la naturaleza y los espacios</b> que habitas"
        }
      />
    </>
  )
}

export default HomeContent
