import React from "react"

const BannerSmall = ({ image, text }) => {
  return (
    <div className="BannerSmall">
      <img className="BannerSmall__img" src={image} alt="BannerSmall" />

      <div className="BannerSmall__container">
        <p
          className="BannerSmall__container__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  )
}

export default BannerSmall
