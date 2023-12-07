import React from "react"
import { GrClose } from "@react-icons/all-files/gr/GrClose"
import { Link, useIntl } from "gatsby-plugin-intl"

const NavMobile = ({ showMenu, setShowMenu }) => {
  const intl = useIntl()

  const handlerSubMenu = () => {
    if (
      window.location.pathname === "/en/servicios/" ||
      window.location.pathname === "/es/servicios/"
    ) {
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
            {intl.formatMessage({ id: "header.home" })}
          </Link>
        </li>
        <li className="NavMobile__list__item">
          <Link
            to="/servicios"
            className="NavMobile__list__item__link"
            onClick={() => handlerSubMenu()}
          >
            {intl.formatMessage({ id: "header.services" })}
          </Link>
        </li>

        <div className="NavMobile__list__subList">
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 0 }}
            onClick={() => handlerSubMenu()}
          >
            {intl.formatMessage({ id: "home.services.titleEspacios" })}
          </Link>
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 1 }}
            onClick={() => handlerSubMenu()}
          >
            {intl.formatMessage({ id: "home.services.titleTapiceria" })}
          </Link>
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 2 }}
            onClick={() => handlerSubMenu()}
          >
            {intl.formatMessage({ id: "home.services.titleJardineria" })}
          </Link>
          <Link
            className="NavMobile__list__item__link"
            to="/servicios"
            state={{ selectedServices: 3 }}
            onClick={() => handlerSubMenu()}
          >
            {intl.formatMessage({ id: "home.services.titleFloral" })}
          </Link>
          <Link
            className="NavMobile__list__item__link disable"
            to="#"
            state={{ selectedServices: 3 }}
            disabled
          >
            {intl.formatMessage({ id: "home.services.titleImportados" })}
          </Link>
        </div>

        <li className="NavMobile__list__item">
          <Link to="/nosotros" className="NavMobile__list__item__link">
            {intl.formatMessage({ id: "header.aboutUs" })}
          </Link>
        </li>
        <li className="NavMobile__list__item">
          <Link to="/catalogo" className="NavMobile__list__item__link">
            {intl.formatMessage({ id: "header.catalog" })}
          </Link>
        </li>
        <li className="NavMobile__list__item">
          <Link to="/contacto" className="NavMobile__list__item__link">
            {intl.formatMessage({ id: "header.contact" })}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMobile
