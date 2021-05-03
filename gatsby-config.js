/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Jövője Van Alapítvány",
    description: "Hogy mindenkinek boldog születésnapja lehessen!"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "orelega one\:300,500,700",
          "montserrat\:300,400,700"
        ],
        display: "swap"
      }
    },
  ],
}