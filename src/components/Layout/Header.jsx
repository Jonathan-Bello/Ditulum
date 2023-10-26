import * as React from "react"
import { Link } from "gatsby"
import useScreenSize from "../../hook/useScreenSize"
import Logo from "../../assets/svg/MobileIcon.svg"
import NavSocialMedia from "./NavSocialMedia"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"

const Header = ({ siteTitle }) => {
  const { width, height } = useScreenSize()

  return (
    <header className="Header">
      <img src={Logo} alt="icon" />
      <NavSocialMedia />
      <span>ES|EN</span>
      <AiOutlineMenu />
    </header>
  )
}

export default Header
