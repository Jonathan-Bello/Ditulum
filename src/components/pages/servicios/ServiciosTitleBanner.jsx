import React from "react"

const ServiciosTitleBanner = ({ title, text, imgSrc }) => {
  return (
    <div className="ServiciosTitleBanner">
      <img className="ServiciosTitleBanner__bgImg" src={imgSrc} alt={title} />

      <div className="ServiciosTitleBanner__content">
        <h3 className="ServiciosTitleBanner__content__title">{title}</h3>
        <p className="ServiciosTitleBanner__text">{text}</p>
      </div>
    </div>
  )
}

export default ServiciosTitleBanner
