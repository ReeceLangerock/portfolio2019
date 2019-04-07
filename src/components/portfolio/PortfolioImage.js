import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

class PortfolioImage extends Component {
  render() {
    const { imageName } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            portfolio: allFile(
              filter: { relativePath: { regex: "portfolio/" } }
            ) {
              edges {
                node {
                  id
                  name
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const img = data.portfolio.edges.find(img => {
            if (img.node.name === imageName) {
              return img
            }
          })
          if (!img) {
            return null
          }
          return <Img fluid={img.node.childImageSharp.fluid} />
        }}
      />
    )
  }
}

export default PortfolioImage
