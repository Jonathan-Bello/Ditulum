import React from "react"
import ContactoBanner from "./ContactoBanner"
import bannerContactoImg from "../../../assets/img/contacto/bannerContactoImg.jpg"
import ContactoData from "./ContactoData"

const ContactoContent = () => {
  return (
    <>
      <ContactoBanner
        image={bannerContactoImg}
        text={`<h1>Comunícanos tus ideas</h2>
        <p>Cuéntanos qué tienes en mente y <b>transforma tus ideas en espacios.</b></p>
        `}
      />

      <ContactoData />
    </>
  )
}

export default ContactoContent
