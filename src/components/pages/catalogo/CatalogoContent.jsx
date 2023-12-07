import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const CatalogoContent = () => {
  const intl = useIntl()

  return (
    <div className="CatalogoContent">
      <p
        style={{
          textAlign: "center",
        }}
      >
        {intl.formatMessage({ id: "catalog.loremText" })}
        <br />
        <a
          href="https://api.whatsapp.com/send?phone=5219841528989"
          target="_blank"
        >
          Whatsapp 984 152 8989
        </a>
      </p>
    </div>
  )
}

export default CatalogoContent
