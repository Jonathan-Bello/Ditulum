import * as React from "react"
import { Link } from "gatsby"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"

import NavMobile from "./NavMobile"
import NavSocialMedia from "./NavSocialMedia"
import useScreenSize from "../../hook/useScreenSize"

import MobileLogo from "../../assets/svg/MobileLogo.svg"
import DeskLogo from "../../assets/svg/DeskLogo.svg"

const Header = ({ siteTitle }) => {
  const { width, height } = useScreenSize()
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header className="Header">
      {width > 1020 && (
        <div className="lg-40">
          <div className="Header__linkList">
            <Link to="/">Home</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/tienda">Tienda</Link>
          </div>
        </div>
      )}

      <img
        className="Header__logo lg-20"
        src={width > 1020 ? DeskLogo : MobileLogo}
        alt="icon"
      />

      {width > 1020 && (
        <div className="Header__linkList lg-20">
          <Link to="/blog">Blog</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      )}

      <div className="Header__content lg-20">
        <NavSocialMedia />
        <b>ES | EN</b>
        <AiOutlineMenu
          className="Header__menuIcon"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {width < 1020 && (
        <NavMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
    </header>
  )
}

export default Header
