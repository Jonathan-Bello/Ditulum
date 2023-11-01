import React from "react"
import CardServiciosFlatList from "../../cards/CardServiciosFlatList/CardServiciosFlatList"

import chipEspacios from "../../../assets/img/servicios/chipEspacios.jpg"
import chipTapiceria from "../../../assets/img/servicios/chipTapiceria.jpg"
import chipFloral from "../../../assets/img/servicios/chipFloral.jpg"
import chipJardinaria from "../../../assets/img/servicios/chipJardinaria.jpg"

const ServiciosFlatList = ({
  selectedServiceIndex,
  setSetselectedServiceIndex,
}) => {
  return (
    <div className="ServiciosFlatList ed-grid s-mb-4">
      <CardServiciosFlatList
        imgSrc={chipEspacios}
        title={"Diseño de espacios"}
        active={selectedServiceIndex == 0 ? true : false}
        index={0}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipTapiceria}
        title={"Tapicería y costura"}
        active={selectedServiceIndex == 1 ? true : false}
        index={1}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipFloral}
        title={"Diseño floral para eventos"}
        active={selectedServiceIndex == 2 ? true : false}
        index={2}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipJardinaria}
        title={"Vivero, macetas y jardinería"}
        active={selectedServiceIndex == 3 ? true : false}
        index={3}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={""}
        title={"Productos importados"}
        index={4}
      />
    </div>
  )
}

export default ServiciosFlatList
