import * as React from "react"
import { Link } from "gatsby"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"

import NavMobile from "./NavMobile"
import NavSocialMedia from "./NavSocialMedia"
import useScreenSize from "../../hook/useScreenSize"

import MobileLogo from "../../assets/svg/MobileLogo.svg"
import DeskLogo from "../../assets/svg/DeskLogo.svg"
import LangSelector from "./LangSelector"

const Header = ({ siteTitle }) => {
  const { width, height } = useScreenSize()
  const [showMenu, setShowMenu] = React.useState(false)
  const [showSubList, setShowSubList] = React.useState(false)

  const handlerSubList = () => {
    setShowSubList(!showSubList)
  }

  const handlerSubListLink = () => {
    if (window.location.pathname === "/servicios/") {
      window.location.reload()
    }
  }

  return (
    <header className="Header">
      {width >= 1024 && (
        <div className="lg-40">
          <div className="Header__linkList">
            <Link to="/">Home</Link>
            <div className="Header__linkList--servicios">
              <Link to="#" onClick={handlerSubList}>
                Servicios
              </Link>
              <div
                className={`Header__linkList--servicios__subList ${
                  showSubList && "active"
                }`}
              >
                <Link
                  to="/servicios"
                  state={{ selectedServices: 0 }}
                  onClick={handlerSubListLink}
                >
                  Diseño de espacios
                </Link>
                <Link
                  to="/servicios"
                  state={{ selectedServices: 1 }}
                  onClick={handlerSubListLink}
                >
                  Tapicería y costura
                </Link>
                <Link
                  to="/servicios"
                  state={{ selectedServices: 2 }}
                  onClick={handlerSubListLink}
                >
                  Vivero, macetas y jardinería
                </Link>
                <Link
                  to="/servicios"
                  state={{ selectedServices: 3 }}
                  onClick={handlerSubListLink}
                >
                  Diseño floral para eventos
                </Link>
                <Link
                  to="#"
                  state={{ selectedServices: 3 }}
                  onClick={handlerSubListLink}
                >
                  Productos importados
                </Link>
              </div>
            </div>
            <Link to="/nosotros">Nosotros</Link>
          </div>
        </div>
      )}

      <div className="Header__logo lg-20">
        <img
          className="Header__logo__img"
          src={width >= 1024 ? DeskLogo : MobileLogo}
          alt="icon"
        />
      </div>

      {width >= 1024 && (
        <div className="Header__linkList lg-20">
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      )}

      <div className="Header__content lg-20">
        <NavSocialMedia />
        <LangSelector />
        <AiOutlineMenu
          className="Header__menuIcon"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {width <= 1024 && (
        <NavMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
    </header>
  )
}

export default Header
