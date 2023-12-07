import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import ContactoBanner from "./ContactoBanner"
import bannerContactoImg from "../../../assets/img/contacto/bannerContactoImg.jpg"
import ContactoData from "./ContactoData"

const ContactoContent = () => {
  const intl = useIntl()

  return (
    <>
      <ContactoBanner
        image={bannerContactoImg}
        text={intl.formatMessage({ id: "contact.banner" })}
      />

      <ContactoData />
    </>
  )
}

export default ContactoContent
