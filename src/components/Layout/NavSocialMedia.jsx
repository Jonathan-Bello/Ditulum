import React from "react"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill"
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"

const NavSocialMedia = () => {
  return (
    <div className="NavSocialMedia">
      <AiOutlineShoppingCart className="NavSocialMedia__icon" />
      <a href="https://www.facebook.com/ditulum/" target="_blank">
        <RiFacebookFill className="NavSocialMedia__icon" />
      </a>
      <a href="https://www.instagram.com/ditulum/?hl=es" target="_blank">
        <AiOutlineInstagram className="NavSocialMedia__icon" />
      </a>
    </div>
  )
}

export default NavSocialMedia
