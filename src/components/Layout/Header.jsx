import * as React from "react"
import useScreenSize from "../../hook/useScreenSize"
import Logo from "../../assets/svg/MobileIcon.svg"
import NavSocialMedia from "./NavSocialMedia"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"
import NavMobile from "./NavMobile"

const Header = ({ siteTitle }) => {
  const { width, height } = useScreenSize()
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header className="Header">
      <img className="Header__logo" src={Logo} alt="icon" />

      <div className="Header__content">
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
