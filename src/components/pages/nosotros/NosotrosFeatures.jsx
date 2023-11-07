import React, { useState } from "react"
import Slider from "react-slick"
import CardMancha from "../../cards/CardMancha"

import artesanosImg from "../../../assets/img/nosotros/artesanos.png"
import equipoImg from "../../../assets/img/nosotros/equipo.png"
import showroomImg from "../../../assets/img/nosotros/showroom.png"
import Modal from "../../modals/Modal"

import imgData from "./imgData"

const NosotrosFeatures = () => {
  const [showModal, setShowModal] = useState(false)
  const [modaldata, setModaldata] = useState(imgData[0])

  const handlerModal = index => {
    setModaldata(imgData[index])
    setShowModal(!showModal)
  }

  return (
    <>
      <div className="HomeFeaturesSection ed-grid">
        <h2 className="HomeFeaturesSection__title">
          Piezas hechas con el <b>corazón</b>
        </h2>

        <div className="HomeFeaturesSection__feutureList ">
          <CardMancha imgSrc={artesanosImg} title={"Artesanos Ditulum"} />
          <CardMancha
            imgSrc={equipoImg}
            title={"Equipo Ditulum"}
            // onClick={() => handlerModal(0)}
          />
          <CardMancha
            imgSrc={showroomImg}
            title={"Showroom"}
            // onClick={() => handlerModal(1)}
          />
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
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
      </Modal>
    </>
  )
}

export default NosotrosFeatures
