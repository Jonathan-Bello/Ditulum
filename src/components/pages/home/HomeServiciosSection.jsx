import React from "react"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import servidiseño from "../../../assets/img/home/servidiseño.jpg"
import servitapiceria from "../../../assets/img/home/servitapiceria.jpg"
import servijardineria from "../../../assets/img/home/servijardineria.jpg"
import serviflores from "../../../assets/img/home/serviflores.jpg"
import serviProx from "../../../assets/img/home/serviProx.jpg"
import hojaSvg from "../../../assets/img/home/hoja.svg"
import CardServiHome from "./CardServiHome"

const HomeServiciosSection = () => {
  const intl = useIntl()

  return (
    <section className="HomeServiciosSection ed-grid">
      <h2 className="HomeServiciosSection__title">
        {intl.formatMessage({ id: "home.services.title" })}
      </h2>
      <p className="HomeServiciosSection__text">
        {intl.formatMessage({ id: "home.services.description" })}
      </p>

      <div className="HomeServiciosSection__servicios">
        <CardServiHome
          index={0}
          imagen={servidiseño}
          title={intl.formatMessage({ id: "home.services.titleEspacios" })}
          url={"/servicios"}
        />
        <CardServiHome
          index={1}
          imagen={servitapiceria}
          title={intl.formatMessage({ id: "home.services.titleTapiceria" })}
          url={"/servicios"}
        />
        <CardServiHome
          index={2}
          imagen={servijardineria}
          title={intl.formatMessage({ id: "home.services.titleJardineria" })}
          url={"/servicios"}
        />
        <CardServiHome
          index={3}
          imagen={serviflores}
          title={intl.formatMessage({ id: "home.services.titleFloral" })}
          url={"/servicios"}
        />
        <CardServiHome
          index={4}
          imagen={serviProx}
          title={intl.formatMessage({ id: "home.services.titleImportados" })}
          url={"#"}
        />
      </div>

      <img className="HomeServiciosSection__hoja" src={hojaSvg} alt="hoja" />
    </section>
  )
}

export default HomeServiciosSection
