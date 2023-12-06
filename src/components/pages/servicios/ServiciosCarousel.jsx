import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import CarouselGallery from "../../carousels/CarouselGallery"

const ServiciosCarousel = ({ imgsGallery }) => {
  const intl = useIntl()

  return (
    <section className="ServiciosCarousel ed-grid">
      <h2 className="ServiciosCarousel__title"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "services.carouselTitle" })
        }}
      >
      </h2>

      <CarouselGallery>
        {imgsGallery?.map((img, index) => (
          <img
            key={index}
            src={img}
            className="ServiciosCarousel__img"
          />
        ))}
      </CarouselGallery>
    </section>
  )
}

export default ServiciosCarousel
