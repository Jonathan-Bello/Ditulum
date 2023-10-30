import React from "react"
import CardServiciosFlatList from "../../cards/CardServiciosFlatList/CardServiciosFlatList"

import chipEspacios from "../../../assets/img/servicios/chipEspacios.jpg"
import chipTapiceria from "../../../assets/img/servicios/chipTapiceria.jpg"
import chipFloral from "../../../assets/img/servicios/chipFloral.jpg"
import chipJardinaria from "../../../assets/img/servicios/chipJardinaria.jpg"

const ServiciosFlatList = ({ setSetselectedServiceIndex }) => {
  return (
    <div className="ServiciosFlatList ed-grid s-mb-4">
      <CardServiciosFlatList
        imgSrc={chipEspacios}
        title={"Diseño de espacios"}
        active={true}
        index={0}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipTapiceria}
        title={"Tapicería y costura"}
        index={1}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipFloral}
        title={"Diseño floral para eventoss"}
        active={""}
        onClick={() => setSetselectedServiceIndex(2)}
      />
      <CardServiciosFlatList
        imgSrc={chipJardinaria}
        title={"Vivero, macetas y jardinería"}
        active={""}
        onClick={() => setSetselectedServiceIndex(3)}
      />
      <CardServiciosFlatList
        imgSrc={""}
        title={"Productos importados"}
        active={""}
        onClick={() => setSetselectedServiceIndex(4)}
      />
    </div>
  )
}

export default ServiciosFlatList
