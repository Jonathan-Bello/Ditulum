import React from "react"

const ServiciosDetails = ({ caracteristicas }) => {
  const lgColNumbers =
    caracteristicas.length == 6
      ? "3"
      : caracteristicas.length == 10
      ? "5"
      : caracteristicas.length

  return (
    <section
      className={`ServiciosDetails ed-grid s-grid-2 m-grid-2 lg-grid-${lgColNumbers}`}
    >
      {caracteristicas.map(item => (
        <div className="ServiciosDetails__item">
          <img
            className="ServiciosDetails__item__img"
            src={item.imgIcon}
            alt={item.title}
          />

          <h4 className="ServiciosDetails__item__title">{item.title}</h4>
        </div>
      ))}
    </section>
  )
}

export default ServiciosDetails
