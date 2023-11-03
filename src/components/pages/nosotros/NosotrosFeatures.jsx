import React from "react"
import CardMancha from "../../cards/CardMancha"

import artesanosImg from "../../../assets/img/nosotros/artesanos.png"
import equipoImg from "../../../assets/img/nosotros/equipo.png"
import showroomImg from "../../../assets/img/nosotros/showroom.png"

const NosotrosFeatures = () => {
  return (
    <div className="HomeFeaturesSection ed-grid">
      <h2 className="HomeFeaturesSection__title">
        Piezas hechas con el <b>corazón</b>
      </h2>

      <div className="HomeFeaturesSection__feutureList ">
        <CardMancha imgSrc={artesanosImg} title={"Artesanos Ditulum"} />
        <CardMancha imgSrc={equipoImg} title={"Equipo Ditulum"} />
        <CardMancha imgSrc={showroomImg} title={"Showroom"} />
      </div>
    </div>
  )
}

export default NosotrosFeatures
