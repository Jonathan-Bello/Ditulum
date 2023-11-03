import React from "react"

const ContactoBanner = ({ image, text }) => {
  return (
    <div className="ContactoBanner">
      <img className="ContactoBanner__img" src={image} alt="ContactoBanner" />

      <div className="ContactoBanner__container">
        <p
          className="ContactoBanner__container__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  )
}

export default ContactoBanner
