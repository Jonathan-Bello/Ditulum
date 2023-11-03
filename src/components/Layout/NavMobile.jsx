import React from "react"
import { GrClose } from "@react-icons/all-files/gr/GrClose"
import { Link } from "gatsby"

const NavMobile = ({ showMenu, setShowMenu }) => {
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
