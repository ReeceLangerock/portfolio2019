var proxy = require('http-proxy-middleware')
const dotenv = require('dotenv')
dotenv.config()
console.log('!!!!! ----- process.env.URL ------ !!!!!!')
console.log(process.env.GRAPH_CMS)
module.exports = {
  siteMetadata: {
    title: `Reece Langerock Personal Terminal`,
    description: `Profile and Blog for Reece Langerock`,
    author: `@reecelangerock`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'Blog',
        // This is the field under which it's accessible
        fieldName: 'blog',
        // URL to query from
        url: process.env.GRAPH_CMS,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Sevastopol'],
          urls: ['./src/components/layout.css'],
        },
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
