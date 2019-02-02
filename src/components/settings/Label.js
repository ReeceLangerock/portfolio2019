import React, { Component } from 'react'
import styled from 'styled-components'
export default class label extends Component {
  render() {
    return (
      <StyledLabel>
        {this.props.children}
      </StyledLabel>
    )
  }
}


const StyledLabel = styled.label`

text-transform: uppercase;
font-size: 4rem;
`