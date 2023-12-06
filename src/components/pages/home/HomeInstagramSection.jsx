import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import insta from "../../../assets/img/home/insta.jpg"
import insta2 from "../../../assets/img/home/insta2.jpg"
import insta3 from "../../../assets/img/home/insta3.jpg"
import insta4 from "../../../assets/img/home/insta4.jpg"
import insta5 from "../../../assets/img/home/insta5.jpg"
import insta6 from "../../../assets/img/home/insta6.jpg"

const HomeInstagramSection = () => {
  const intl = useIntl()

  return (
    <section className="HomeInstagramSection ed-grid">
      <h2
        className="HomeInstagramSection__title"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "home.instagram.title" }),
        }}
      />

      <div className="HomeInstagramSection__gallery ed-grid s-grid-2 m-grid-3 row-gap s-mb-3">
        <img src={insta} alt="insta" />
        <img src={insta2} alt="insta2" />
        <img src={insta3} alt="insta3" />
        <img src={insta4} alt="insta4" />
        <img src={insta5} alt="insta5" />
        <img src={insta6} alt="insta6" />
      </div>

      <a
        className="HomeInstagramSection__instaLink"
        href="https://www.instagram.com/ditulum"
        target="_blank"
      >
        {intl.formatMessage({ id: "home.instagram.link" })}
      </a>
    </section>
  )
}

export default HomeInstagramSection
