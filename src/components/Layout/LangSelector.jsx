import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const LangSelector = () => {
 const handleChangeLanguage = lang => {
   changeLocale(lang)
 }

 return (
   <b>
     <span onClick={() => handleChangeLanguage('es')}>ES</span> | {" "}
     <span onClick={() => handleChangeLanguage('en')}>EN</span>
   </b>
 )
}

export default LangSelector