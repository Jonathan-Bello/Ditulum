import React from "react"
import CarouselGallery from "../../carousels/CarouselGallery"

const ServiciosCarousel = ({ imgsGallery }) => {
  return (
    <section className="ServiciosCarousel ed-grid">
      <h2 className="ServiciosCarousel__title">
        <b>Creamos historias contigo</b> en los espacios que habitas
      </h2>

      <CarouselGallery>
        {imgsGallery?.map((img, index) => (
          <img
            key={index}
            src={img}
            // alt={img.name}
            className="ServiciosCarousel__img"
          />
        ))}
      </CarouselGallery>
    </section>
  )
}

export default ServiciosCarousel
