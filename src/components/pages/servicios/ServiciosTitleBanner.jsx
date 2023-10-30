import React from "react"

const ServiciosTitleBanner = ({ title, description, imgSrc }) => {
  return (
    <div className="ServiciosTitleBanner ed-grid">
      <img className="ServiciosTitleBanner__bgImg" src={imgSrc} alt={title} />

      <div className="ServiciosTitleBanner__content">
        <h3 className="ServiciosTitleBanner__content__title">{title}</h3>
        <p className="ServiciosTitleBanner__content__text">{description}</p>
      </div>
    </div>
  )
}

export default ServiciosTitleBanner
