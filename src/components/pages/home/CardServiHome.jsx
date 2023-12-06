import { Link } from "gatsby-plugin-intl"

import React from "react"

const CardServiHome = ({ index, imagen, title, url }) => {
  return (
    <div className="CardServiHome">
      <Link to={url} state={{ selectedServices: index }}>
        <img className="CardServiHome__img" src={imagen} alt="imgServicio" />
      </Link>
      <h3 className="CardServiHome__title">{title}</h3>
    </div>
  )
}

export default CardServiHome
