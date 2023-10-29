import React from "react"

const CardServiciosFlatList = ({
  imgSrc,
  title,
  active,
  index,
  setSetselectedServiceIndex,
}) => {
  return (
    <div
      onClick={() => setSetselectedServiceIndex(index)}
      className={`CardServiciosFlatList ${
        active && "CardServiciosFlatList--active"
      }`}
    >
      {imgSrc ? (
        <img
          className="CardServiciosFlatList__bgImg"
          src={imgSrc}
          alt={title}
        />
      ) : (
        <div> </div>
      )}

      <h3 className="CardServiciosFlatList__title">{title}</h3>
    </div>
  )
}

export default CardServiciosFlatList
