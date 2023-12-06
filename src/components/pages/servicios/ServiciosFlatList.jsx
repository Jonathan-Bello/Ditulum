import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import CardServiciosFlatList from "../../cards/CardServiciosFlatList/CardServiciosFlatList"

import chipEspacios from "../../../assets/img/servicios/chipEspacios.jpg"
import chipTapiceria from "../../../assets/img/servicios/chipTapiceria.jpg"
import chipFloral from "../../../assets/img/servicios/chipFloral.jpg"
import chipJardinaria from "../../../assets/img/servicios/chipJardinaria.jpg"

const ServiciosFlatList = ({
  selectedServiceIndex,
  setSetselectedServiceIndex,
}) => {
  const intl = useIntl()

  return (
    <div className="ServiciosFlatList ed-grid s-mb-4">
      <CardServiciosFlatList
        imgSrc={chipEspacios}
        title={intl.formatMessage({ id: "services.espacios.title" })}
        active={selectedServiceIndex == 0 ? true : false}
        index={0}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipTapiceria}
        title={intl.formatMessage({ id: "services.tapiceria.title" })}
        active={selectedServiceIndex == 1 ? true : false}
        index={1}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipJardinaria}
        title={intl.formatMessage({ id: "services.jardineria.title" })}
        active={selectedServiceIndex == 2 ? true : false}
        index={2}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={chipFloral}
        title={intl.formatMessage({ id: "services.floral.title" })}
        active={selectedServiceIndex == 3 ? true : false}
        index={3}
        setSetselectedServiceIndex={setSetselectedServiceIndex}
      />
      <CardServiciosFlatList
        imgSrc={""}
        title={intl.formatMessage({ id: "services.importados.title" })}
        index={4}
      />
    </div>
  )
}

export default ServiciosFlatList
