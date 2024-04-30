/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ditulum Site`,
    description: `Creamos experiencias que te permiten desarrollarte de manera funcional y creativa, sin dejar de lado un ambiente natural y saludable.`,
    author: `Jonathan Alexis Bello Lopez`,
    siteUrl: `https://ditulum.com/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F4F2F4`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.png`,
      },
    },
    {
    resolve: `gatsby-plugin-intl`,
    options: {
      // ruta al recurso JSON del idioma
      path: `${__dirname}/src/intl`,
      // idiomas soportados
      languages: [`es`,`en`],
      // idioma predeterminado
      defaultLanguage: `es`,
      // opción para redirigir a `/es` cuando se conecta a `/`
      redirect: true,
    },
  },
  ],
}
