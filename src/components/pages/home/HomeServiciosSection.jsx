import React from "react"
import servidiseño from "../../../assets/img/home/servidiseño.jpg"
import servitapiceria from "../../../assets/img/home/servitapiceria.jpg"
import servijardineria from "../../../assets/img/home/servijardineria.jpg"
import serviflores from "../../../assets/img/home/serviflores.jpg"
import serviProx from "../../../assets/img/home/serviProx.jpg"
import CardServiHome from "./CardServiHome"

const HomeServiciosSection = () => {
  return (
    <section className="HomeServiciosSection ed-grid">
      <h2 className="HomeServiciosSection__title">Servicios</h2>
      <p className="HomeServiciosSection__text">
        Creamos experiencias que te permiten desarrollarte de manera funcional y
        creativa, sin dejar de lado un ambiente natural y saludable.
      </p>

      <div className="HomeServiciosSection__servicios">
        <CardServiHome
          imagen={servidiseño}
          title={"Diseño de espacios"}
          url={"#"}
        />
        <CardServiHome
          imagen={servitapiceria}
          title={"Tapicería y costura"}
          url={"#"}
        />
        <CardServiHome
          imagen={servijardineria}
          title={"Vivero, macetas y jardinería"}
          url={"#"}
        />
        <CardServiHome
          imagen={serviflores}
          title={"Diseño floral para eventos"}
          url={"#"}
        />
        <CardServiHome
          imagen={serviProx}
          title={"Productos importados"}
          url={"#"}
        />
      </div>
    </section>
  )
}

export default HomeServiciosSection
