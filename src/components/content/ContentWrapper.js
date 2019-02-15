import React, { Component } from 'react'
import styled from 'styled-components'

export default class ContentWrapper extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  p {
    font-size: 1.4rem;
    word-spacing: 0.75px;
    letter-spacing: 0.4px;
  }
`
