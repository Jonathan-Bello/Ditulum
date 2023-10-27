import React from "react"

const Banner = ({ image, text }) => {
  return (
    <div className="Banner">
      <img className="Banner__img" src={image} alt="Banner" />

      <div className="Banner__container">
        <p
          className="Banner__container__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  )
}

export default Banner
