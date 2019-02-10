import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

export default class ContactItem extends Component {
  renderImage() {
    const type = this.props.type
    return (
      <StaticQuery
        query={graphql`
          query {
            email: file(relativePath: { eq: "email.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            linkedin: file(relativePath: { eq: "linkedin.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            github: file(relativePath: { eq: "github.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            twitter: file(relativePath: { eq: "twitter.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return <Img fluid={data[type].childImageSharp.fluid} />
        }}
      />
    )
  }

  render() {
    const { link, type, text } = this.props
    return (
      <Container href={link} target="_blank">
        {this.renderImage()}
        <p>{text}</p>
      </Container>
    )
  }
}

const Container = styled.a`
  width: 250px;
  height: 250px;
  padding: 5px;
  transition: 0.5s ease-in-out all;
  cursor: pointer;
  margin: 10px;
  text-decoration-color: ${props => props.theme.content_item.fontColor};

  p {
    text-align: center;
    color: ${props => props.theme.content_item.fontColor};
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 24px;
    display: none;
  }

  :hover {
    transform: scale(1.1) translate(0, -10px);
    transition: 0.5s ease-in-out all;
    margin-bottom: 10px;

    p {
      display: block;
    }
  }
`
