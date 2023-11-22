import React from "react"
import { GrClose } from "@react-icons/all-files/gr/GrClose"
import { Link } from "gatsby"

const NavMobile = ({ showMenu, setShowMenu }) => {
  const handlerSubMenu = () => {
    if (window.location.pathname === "/servicios/") {
      window.location.reload()
    }
  }

  return (
    <div className={`NavMobile ${showMenu ? "show" : ""}`}>
      <GrClose
        className="NavMobile__close"
        onClick={() => setShowMenu(!showMenu)}
      />

      <ul className="NavMobile__list">
        <li className="NavMobile__list__item">
          <Link to="/" className="NavMobile__list__item__link">
            Inicio
          </Link>
        </li>
        <li className="NavMobile__list__item">
          <Link to="/servicios" className="NavMobile__list__item__link">
            Servicios
          </Link>
        </li>

        <div className="NavMobile__list__subList">
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 0 }}
            onClick={() => handlerSubMenu()}
          >
            Diseño de espacios
          </Link>
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 1 }}
            onClick={() => handlerSubMenu()}
          >
            Tapicería y costura
          </Link>
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 2 }}
            onClick={() => handlerSubMenu()}
          >
            Vivero, macetas y jardinería
          </Link>
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 3 }}
            onClick={() => handlerSubMenu()}
          >
            Diseño floral para eventos
          </Link>
          <Link
            className="NavMobile__list__item__link disable"
            to="#"
            state={{ selectedServices: 3 }}
            disabled
          >
            Productos importados
          </Link>
        </div>

        <li className="NavMobile__list__item">
          <Link to="/nosotros" className="NavMobile__list__item__link">
            Nosotros
          </Link>
        </li>
        <li className="NavMobile__list__item">
          <Link to="/tienda" className="NavMobile__list__item__link">
            Tienda
          </Link>
        </li>
        <li className="NavMobile__list__item">
          <Link to="/blog" className="NavMobile__list__item__link">
            Blog
          </Link>
        </li>
        <li className="NavMobile__list__item">
          <Link to="/contacto" className="NavMobile__list__item__link">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMobile
