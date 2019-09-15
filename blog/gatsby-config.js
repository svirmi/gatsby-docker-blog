/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    siteMetadata: {
        title: "Gatsby-Bootstrap",
        kw: "kw0, kw1, kw2",
        titleTemplate: "%s · Gtasby Blog",
        description:
            "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
        url: "https://www.doe.com", // No trailing slash allowed!
        image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
        twitterUsername: "@occlumency",
    },
    plugins: [
        // You can have multiple instances of this plugin
        // to read source nodes from different locations on your
        // filesystem.
        //
        // The following sets up the Jekyll pattern of having a
        // "pages" directory for Markdown files and a "data" directory
        // for `.json`, `.yaml`, `.csv`.
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {},
        },
        `gatsby-plugin-react-helmet`
        ]
}
