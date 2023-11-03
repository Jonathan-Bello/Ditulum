import React from "react"
import imgFundadora from "../../../assets/img/nosotros/fundadora.png"
import imgSlogan from "../../../assets/img/nosotros/sloganImg.png"

const NosotrosHistory = () => {
  return (
    <section className="NosotrosHistory ed-grid s-grid-1 lg-grid-2">
      <div className="NosotrosHistory__bio">
        <img
          className="NosotrosHistory__bio__img"
          src={imgFundadora}
          alt="Fundadora"
        />
        <h3 className="NosotrosHistory__bio__title">Raquel Peniche</h3>
        <h4 className="NosotrosHistory__bio__subtitle">Fundadora</h4>
      </div>

      <div className="NosotrosHistory__content">
        <p className="NosotrosHistory__content__text">
          Se dice que en cada espacio habitan historias únicas que se cuentan a
          través de los objetos que lo componen. Estos se convierten en
          experiencias que resuenan en cada rincón y nos hacen ser quienes
          somos.
        </p>
        <p className="NosotrosHistory__content__text">
          Se dice también que, cuando llegue el momento, estas historias
          encontrarán sentido y nos harán regresar a ese lugar que nos hace
          sentir especiales. Será entonces cuando los objetos, cargados de
          significado, anidarán en nuestro corazón.
        </p>
        <p className="NosotrosHistory__content__text">
          En Ditulum, no solo creamos objetos con corazón, te ayudamos a diseñar
          ese lugar donde puedas sembrar tus historias y sentirte seguro. Un
          refugio que te conecta con la naturaleza y te permite mirar a tu
          interior.
        </p>

        <div>
          <p className="NosotrosHistory__content__slogan">
            De mi corazón al de ustedes,
          </p>

          <img
            className="NosotrosHistory__content__sloganImg"
            src={imgSlogan}
            alt="slogimg"
          />
        </div>
      </div>
    </section>
  )
}

export default NosotrosHistory
