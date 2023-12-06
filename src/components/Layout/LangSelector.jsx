import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const LangSelector = () => {
  const handleChangeLanguage = lang => {
    changeLocale(lang)
  }

  return (
    <b className="LangSelector">
      <span
        className="LangSelector__Lang"
        onClick={() => handleChangeLanguage("es")}
      >
        ES
      </span>
      {" "}|{" "}
      <span
        className="LangSelector__Lang"
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </span>
    </b>
  )
}

export default LangSelector
