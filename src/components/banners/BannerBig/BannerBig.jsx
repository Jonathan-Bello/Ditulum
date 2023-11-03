import React from "react"

const BannerBig = ({ image, text }) => {
  return (
    <div className="BannerBig">
      <img className="BannerBig__img" src={image} alt="BannerBig" />

      <div className="BannerBig__container">
        <p
          className="BannerBig__container__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  )
}

export default BannerBig
