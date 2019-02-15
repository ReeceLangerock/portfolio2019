import React, { Component } from 'react'
import styled from 'styled-components'
export default class label extends Component {
  render() {
    return <StyledLabel>{this.props.children}</StyledLabel>
  }
}

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 4rem;

  @media (max-width: 1000px) {
    font-size: 3rem;
  }
  @media (max-width: ${props => props.theme.query.tablet}) {
    font-size: 2.45rem;
  }
  @media (max-width: ${props => props.theme.query.small}) {
    margin-bottom: 10px;
  }
`
