import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import Slider from "react-slick"
import CardMancha from "../../cards/CardMancha"

import artesanosImg from "../../../assets/img/nosotros/artesanos.png"
import equipoImg from "../../../assets/img/nosotros/equipo.png"
import showroomImg from "../../../assets/img/nosotros/showroom.png"
import Modal from "../../modals/Modal"

import imgData from "./imgData"

const NosotrosFeatures = () => {
  const intl = useIntl()

  const [showModal, setShowModal] = useState(false)
  const [modaldata, setModaldata] = useState(imgData[0])

  const handlerModal = index => {
    setModaldata(imgData[index])
    setShowModal(!showModal)
  }

  return (
    <>
      <div className="HomeFeaturesSection ed-grid">
        <h2
          className="HomeFeaturesSection__title"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "aboutUs.features.title" }),
          }}
        />

        <div className="HomeFeaturesSection__featureList ">
          <CardMancha
            imgSrc={artesanosImg}
            title={intl.formatMessage({ id: "aboutUs.features.feature1" })}
          />
          <CardMancha
            imgSrc={equipoImg}
            title={intl.formatMessage({ id: "aboutUs.features.feature2" })}
            onClick={() => handlerModal(0)}
          />
          <CardMancha
            imgSrc={showroomImg}
            title={intl.formatMessage({ id: "aboutUs.features.feature3" })}
            onClick={() => handlerModal(1)}
          />
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          <Slider
            dots={false}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            speed={500}
            initialSlide={1}
          >
            {modaldata?.map((img, index) => (
              <img key={index} src={img} className="Modal__img" />
            ))}
          </Slider>
        </div>
      </Modal>
    </>
  )
}

export default NosotrosFeatures
