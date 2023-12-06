import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const NosotrosSubBanner = () => {
  const intl = useIntl()

  return (
    <section className="NosotrosSubBanner s-mt-4">
      <div className="NosotrosSubBanner__content">
        <p
          className="NosotrosSubBanner__content__text"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "aboutUs.subBanner.text" }),
          }}
        />

        <h3 className="NosotrosSubBanner__content__title">
          {intl.formatMessage({ id: "aboutUs.subBanner.title" })}
        </h3>
      </div>
    </section>
  )
}

export default NosotrosSubBanner
