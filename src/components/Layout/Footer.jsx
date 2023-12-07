import React from "react"
import logoImg from "../../assets/svg/DeskLogo.svg"

import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const Footer = () => {
  const intl = useIntl()

  return (
    <footer className="Footer ed-grid full">
      <div>
        <div className="ed-grid s-grid-1 m-grid-3 lg-grid-12">
          <div className="Footer__contactData s-order-2 m-order-1 lg-cols-3">
            <h5 className="Footer__contactData__title">
              {intl.formatMessage({ id: "contact.contactData.addressTitle" })}
            </h5>
            <p className="Footer__contactData__text">
              {intl.formatMessage({ id: "contact.contactData.address" })}
            </p>

            <h5 className="Footer__contactData__title">
              {intl.formatMessage({ id: "contact.contactData.daysTitle" })}
            </h5>

            <h6 className="Footer__contactData__subtitle">
              {intl.formatMessage({ id: "contact.contactData.days1" })}
            </h6>
            <p className="Footer__contactData__text">9:00 a.m. a 6:00 p.m.</p>

            <h6 className="Footer__contactData__subtitle">
              {intl.formatMessage({ id: "contact.contactData.days2" })}
            </h6>
            <p className="Footer__contactData__text">9:00 a.m. a 5:00 p.m.</p>
          </div>

          <div className="Footer__BrandContainer s-order-1 m-order-2 lg-cols-6">
            <img
              className="Footer__BrandContainer__logo"
              src={logoImg}
              alt="Logo"
            />
            <div className="Footer__BrandContainer__socialmedia">
              <a
                href="https://www.instagram.com/ditulum/?hl=es"
                target="_blank"
              >
                <AiOutlineInstagram className="Footer__BrandContainer__socialmedia--icon" />
              </a>
              <a href="https://www.facebook.com/ditulum/" target="_blank">
                <RiFacebookFill className="Footer__BrandContainer__socialmedia--icon" />
              </a>
            </div>
          </div>

          <div className="Footer__contactData s-order-3 m-order-3  lg-cols-3">
            <h5 className="Footer__contactData__title">Email</h5>
            <p className="Footer__contactData__text">
              <a href="mailto:ventas@ditulum.com">ventas@ditulum.com</a>
            </p>

            <h5 className="Footer__contactData__title">Whatsapp</h5>
            <p className="Footer__contactData__text">
              <a
                href="https://api.whatsapp.com/send?phone=5219841528989"
                target="_blank"
              >
                984 152 8989
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="Footer__footer  ed-grid s-grid-1 m-grid-3 lg-grid-12">
        <Link
          className="Footer__footer__link s-center m-left s-order-3 m-order-1 lg-cols-3"
          to="/"
        >
          {intl.formatMessage({ id: "footer.notice" })}
        </Link>

        <p className="Footer__footer__link s-center s-order-1 m-order-2 lg-cols-6">
          {intl.formatMessage({ id: "footer.reserved" })}
        </p>

        <p className="Footer__footer__link s-center m-left s-order-2 m-order-3 lg-cols-3">
          {intl.formatMessage({ id: "footer.by" })}
        </p>
      </div>
    </footer>
  )
}

export default Footer
