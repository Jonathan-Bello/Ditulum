import React from "react"
import Slider from "react-slick"

const CarouselGallery = ({ children }) => {
  return (
    <section className="CarouselGallery">
      <Slider
        dots={true}
        infinite={false}
        slidesToShow={4}
        slidesToScroll={4}
        speed={500}
        initialSlide={0}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {children}
      </Slider>
    </section>
  )
}

export default CarouselGallery
