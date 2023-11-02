import React from "react"
import servidiseño from "../../../assets/img/home/servidiseño.jpg"
import servitapiceria from "../../../assets/img/home/servitapiceria.jpg"
import servijardineria from "../../../assets/img/home/servijardineria.jpg"
import serviflores from "../../../assets/img/home/serviflores.jpg"
import serviProx from "../../../assets/img/home/serviProx.jpg"
import hojaSvg from "../../../assets/img/home/hoja.svg"
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
          index={0}
          imagen={servidiseño}
          title={"Diseño de espacios"}
          url={"/servicios"}
        />
        <CardServiHome
          index={1}
          imagen={servitapiceria}
          title={"Tapicería y costura"}
          url={"/servicios"}
        />
        <CardServiHome
          index={2}
          imagen={servijardineria}
          title={"Vivero, macetas y jardinería"}
          url={"/servicios"}
        />
        <CardServiHome
          index={3}
          imagen={serviflores}
          title={"Diseño floral para eventos"}
          url={"/servicios"}
        />
        <CardServiHome
          index={4}
          imagen={serviProx}
          title={"Productos importados"}
          url={"#"}
        />
      </div>

      <img className="HomeServiciosSection__hoja" src={hojaSvg} alt="hojita" />
    </section>
  )
}

export default HomeServiciosSection
