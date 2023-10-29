import React from "react"
import logoImg from "../../assets/svg/DeskLogo.svg"

import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="Footer ed-grid full">
      <div>
        <div className="ed-grid s-grid-1 m-grid-3 lg-grid-12">
          <div className="Footer__contactData s-order-2 m-order-1 lg-cols-3">
            <h5 className="Footer__contactData__title">Dirección</h5>
            <p className="Footer__contactData__text">
              Av. Kukulkan MZ 10-L2, Centro, 77760 Tulum, Q.R., México
            </p>

            <h5 className="Footer__contactData__title">
              Días y Horarios de Atención
            </h5>

            <h6 className="Footer__contactData__subtitle">Lunes a viernes</h6>
            <p className="Footer__contactData__text">9:00 a.m. a 6:00 p.m.</p>

            <h6 className="Footer__contactData__subtitle">Sábado</h6>
            <p className="Footer__contactData__text">9:00 a.m. a 5:00 p.m.</p>
          </div>

          <div className="Footer__BrandContainer s-order-1 m-order-2 lg-cols-6">
            <img
              className="Footer__BrandContainer__logo"
              src={logoImg}
              alt="Logo"
            />
            <div className="Footer__BrandContainer__socialmedia">
              <AiOutlineInstagram className="Footer__BrandContainer__socialmedia--icon" />
              <RiFacebookFill className="Footer__BrandContainer__socialmedia--icon" />
            </div>
          </div>

          <div className="Footer__contactData s-order-3 m-order-3  lg-cols-3">
            <h5 className="Footer__contactData__title">Email</h5>
            <p className="Footer__contactData__text">
              <a href="mailto:ventas@ditulum.com">ventas@ditulum.com</a>
            </p>

            <h5 className="Footer__contactData__title">Whatsapp</h5>
            <p className="Footer__contactData__text">
              <a href="tel:9841528989">984 152 8989</a>
            </p>
          </div>
        </div>
      </div>

      <div className="Footer__footer  ed-grid s-grid-1 m-grid-3 lg-grid-12">
        <Link
          className="Footer__footer__link s-center m-left s-order-3 m-order-1 lg-cols-3"
          to="/"
        >
          Aviso de privacidad
        </Link>

        <p className="Footer__footer__link s-center s-order-1 m-order-2 lg-cols-6">
          © 2023 Ditulum - Todos los derechos reservados
        </p>

        <p className="Footer__footer__link s-center m-left s-order-2 m-order-3 lg-cols-3">
          Elaborado por YGU Comunicaxion
        </p>
      </div>
    </footer>
  )
}

export default Footer
