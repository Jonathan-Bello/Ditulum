import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import imgFundadora from "../../../assets/img/nosotros/fundadora.png"
import imgSlogan from "../../../assets/img/nosotros/sloganImg.png"

const NosotrosHistory = () => {
  const intl = useIntl()

  return (
    <section className="NosotrosHistory ed-grid s-grid-1 lg-grid-2">
      <div className="NosotrosHistory__bio">
        <img
          className="NosotrosHistory__bio__img"
          src={imgFundadora}
          alt="Fundadora"
        />
        <h3 className="NosotrosHistory__bio__title">Raquel Peniche</h3>
        <h4 className="NosotrosHistory__bio__subtitle">
          {intl.formatMessage({ id: "aboutUs.bio.subtitle" })}
        </h4>
      </div>

      <div className="NosotrosHistory__content">
        <p className="NosotrosHistory__content__text">
          {intl.formatMessage({ id: "aboutUs.content.text1" })}
        </p>
        <p className="NosotrosHistory__content__text">
          {intl.formatMessage({ id: "aboutUs.content.text2" })}
        </p>
        <p className="NosotrosHistory__content__text">
          {intl.formatMessage({ id: "aboutUs.content.text3" })}
        </p>

        <div>
          <p className="NosotrosHistory__content__slogan">
            {intl.formatMessage({ id: "aboutUs.content.slogan" })}
          </p>

          <img
            className="NosotrosHistory__content__sloganImg"
            src={imgSlogan}
            alt="slogan"
          />
        </div>
      </div>
    </section>
  )
}

export default NosotrosHistory
