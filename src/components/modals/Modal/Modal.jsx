import React from "react"
import { GrClose } from "@react-icons/all-files/gr/GrClose"

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <div className={`Modal ${showModal ? "show" : ""}`}>
      <GrClose
        className="Modal__close"
        onClick={() => setShowModal(!showModal)}
      />
      <div className="Modal__content">{children}</div>
    </div>
  )
}

export default Modal
