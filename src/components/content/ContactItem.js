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
    const { link, text } = this.props
    return (
      <Container href={link} target="_blank">
        {this.renderImage()}
        <p>{text}</p>
      </Container>
    )
  }
}

const Container = styled.a`
  width: 225px;
  height: 225px;
  padding: 5px;
  transition: 0.5s ease-in-out all;
  cursor: pointer;
  margin: 10px;
  text-decoration-color: ${props =>
    props.theme.content_item.fontColor_alternate};

  p {
    text-align: center;
    color: ${props => props.theme.content_item.fontColor_alternate};
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 32px;
    display: none;
  }

  :hover {
    transform: scale(1.08) translate(0, -10px);
    transition: 0.5s ease-in-out all;
    margin-bottom: 10px;

    p {
      display: block;
    }
  }

  @media (max-width: 1000px) {
    width: 175px;
    height: 175px;
  }

  @media (max-width: ${props => props.theme.query.tablet}) {
    :hover {
      transform: none;
    }
    width: 48%;
    padding: 0;
    height: auto;
    margin: 0 0 15px 0;
    p {
      margin-top: 10px;
      display: block;
    }
  }
  @media (max-width: ${props => props.theme.query.small}) {
    width: 90%;
    margin: 0 auto 15px auto;
  }
`
