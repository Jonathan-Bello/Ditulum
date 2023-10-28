import { Link } from "gatsby"
import React from "react"

const CardMancha = ({ imgSrc, title, url }) => {
  return (
    <article className="CardMancha">
      <Link to={url}>
        <img className="CardMancha__img" src={imgSrc} alt="imgServicio" />
      </Link>
      <h4 className="CardMancha__title">{title}</h4>
    </article>
  )
}

export default CardMancha
