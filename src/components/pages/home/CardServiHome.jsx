import { Link } from "gatsby"
import React from "react"

const CardServiHome = ({ imagen, title, url }) => {
  return (
    <div className="CardServiHome">
      <Link to={url}>
        <img className="CardServiHome__img" src={imagen} alt="imgServicio" />
      </Link>
      <h3 className="CardServiHome__title">{title}</h3>
    </div>
  )
}

export default CardServiHome
