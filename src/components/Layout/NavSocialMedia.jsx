import React from "react"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill"

const NavSocialMedia = () => {
  return (
    <div className="NavSocialMedia">
      <AiOutlineShoppingCart className="NavSocialMedia__icon" />
      <RiFacebookFill className="NavSocialMedia__icon" />
      <AiOutlineInstagram className="NavSocialMedia__icon" />
    </div>
  )
}

export default NavSocialMedia
