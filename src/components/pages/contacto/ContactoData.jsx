import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { GrLocation } from "@react-icons/all-files/gr/GrLocation"
import { BsCalendar } from "@react-icons/all-files/bs/BsCalendar"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { IoLogoWhatsapp } from "@react-icons/all-files/io5/IoLogoWhatsapp"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill"

const ContactoData = () => {
  const intl = useIntl()

  return (
    <>
      <section className="ContactoData ed-grid s-grid-1 lg-grid-2">
        <div className="ContactoData__data">
          <h3 className="">
            {intl.formatMessage({ id: "contact.contactData2.branchTitle" })}
          </h3>
          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <GrLocation className="ContactoDataItem__titleContainer__icon" />
              <h3 className="ContactoDataItem__titleContainer__title">
                {intl.formatMessage({ id: "contact.contactData.addressTitle" })}
              </h3>
            </div>
            <p className="ContactoDataItem__text">
              {intl.formatMessage({ id: "contact.contactData2.address" })}
            </p>
          </div>

          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <BsCalendar className="ContactoDataItem__titleContainer__icon" />
              <h3 className="ContactoDataItem__titleContainer__title">
                {intl.formatMessage({ id: "contact.contactData.daysTitle" })}
              </h3>
            </div>
            <h4 className="ContactoDataItem__subtitle">
              {intl.formatMessage({ id: "contact.contactData.days1" })}
            </h4>
            <p className="ContactoDataItem__text">9:00 a.m. a 6:00 p.m.</p>
            <h4 className="ContactoDataItem__subtitle">
              {intl.formatMessage({ id: "contact.contactData.days2" })}
            </h4>
            <p className="ContactoDataItem__text">9:00 a.m. a 5:00 p.m.</p>
          </div>

          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <IoLogoWhatsapp className="ContactoDataItem__titleContainer__icon" />
              <h3 className="ContactoDataItem__titleContainer__title">
                Whatsapp
              </h3>
            </div>
            <p className="ContactoDataItem__text">
              <a
                href="https://api.whatsapp.com/send?phone=9841452112"
                target="_blank"
              >
                984 145 2112
              </a>
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14976.13660123468!2d-87.4594033!3d20.2159019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd1521da8ae1b%3A0xd2a77fb432dc63cf!2sDitulum!5e0!3m2!1ses!2smx!4v1702592399803!5m2!1ses!2smx"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="ContactoData ed-grid s-grid-1 lg-grid-2">
        <div className="ContactoData__data">
          <h3 className="">
            {intl.formatMessage({ id: "contact.contactData.branchTitle" })}
          </h3>
          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <GrLocation className="ContactoDataItem__titleContainer__icon" />
              <h3 className="ContactoDataItem__titleContainer__title">
                {intl.formatMessage({ id: "contact.contactData.addressTitle" })}
              </h3>
            </div>
            <p className="ContactoDataItem__text">
              {intl.formatMessage({ id: "contact.contactData.address" })}
            </p>
          </div>

          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <BsCalendar className="ContactoDataItem__titleContainer__icon" />
              <h3 className="ContactoDataItem__titleContainer__title">
                {intl.formatMessage({ id: "contact.contactData.daysTitle" })}
              </h3>
            </div>
            <h4 className="ContactoDataItem__subtitle">
              {intl.formatMessage({ id: "contact.contactData.days1" })}
            </h4>
            <p className="ContactoDataItem__text">9:00 a.m. a 6:00 p.m.</p>
            <h4 className="ContactoDataItem__subtitle">
              {intl.formatMessage({ id: "contact.contactData.days2" })}
            </h4>
            <p className="ContactoDataItem__text">9:00 a.m. a 5:00 p.m.</p>
          </div>

          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <AiOutlineMail className="ContactoDataItem__titleContainer__icon" />
              <h3 className="ContactoDataItem__titleContainer__title">
                E-mail
              </h3>
            </div>
            <p className="ContactoDataItem__text">
              <a href="mailto:ventas@ditulum.com">ventas@ditulum.com</a>
            </p>
          </div>

          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <IoLogoWhatsapp className="ContactoDataItem__titleContainer__icon" />
              <h3 className="ContactoDataItem__titleContainer__title">
                Whatsapp
              </h3>
            </div>
            <p className="ContactoDataItem__text">
              <a
                href="https://api.whatsapp.com/send?phone=5219841528989"
                target="_blank"
              >
                984 152 8989
              </a>
            </p>
          </div>

          <div className="ContactoDataItem">
            <div className="ContactoDataItem__titleContainer">
              <h3 className="ContactoDataItem__titleContainer__title">
                {intl.formatMessage({ id: "contact.contactData.titleSocial" })}
              </h3>
            </div>
            <p className="ContactoDataItem__text">
              <a
                href="https://www.instagram.com/ditulum/?hl=es"
                target="_blank"
              >
                <AiOutlineInstagram className="ContactoDataItem__text__icon" />
                @ditulum
              </a>

              <a href="https://www.facebook.com/ditulum/" target="_blank">
                <RiFacebookFill className="ContactoDataItem__text__icon" />
                Ditulum
              </a>
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7488.270625846754!2d-87.46984045767005!3d20.211697431945527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f51d522e8f70443%3A0x4f8ef9a4560b282b!2sDitulum!5e0!3m2!1ses-419!2smx!4v1699006447955!5m2!1ses-419!2smx"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  )
}

export default ContactoData
