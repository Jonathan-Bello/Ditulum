import React from "react"
import CardServiciosFlatList from "../../cards/CardServiciosFlatList/CardServiciosFlatList"

import chipEspacios from "../../../assets/img/servicios/chipEspacios.jpg"
import chipTapiceria from "../../../assets/img/servicios/chipTapiceria.jpg"
import chipFloral from "../../../assets/img/servicios/chipFloral.jpg"
import chipJardinaria from "../../../assets/img/servicios/chipJardinaria.jpg"

const ServiciosFlatList = () => {
  return (
    <div className="ServiciosFlatList ed-grid">
      <CardServiciosFlatList
        imgSrc={chipEspacios}
        title={"Diseño de espacios"}
        active={true}
      />
      <CardServiciosFlatList
        imgSrc={chipTapiceria}
        title={"Tapicería y costura"}
        active={""}
      />
      <CardServiciosFlatList
        imgSrc={chipFloral}
        title={"Diseño floral para eventoss"}
        active={""}
      />
      <CardServiciosFlatList
        imgSrc={chipJardinaria}
        title={"Vivero, macetas y jardinería"}
        active={""}
      />
      <CardServiciosFlatList
        imgSrc={""}
        title={"Productos importados"}
        active={""}
      />
    </div>
  )
}

export default ServiciosFlatList
