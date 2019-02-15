import React, { Component } from 'react'
import styled from 'styled-components'

export default class ContentWrapper extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

const Container = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  p {
    font-size: 1.4rem;
    word-spacing: 0.75px;
    letter-spacing: 0.4px;
  }
  @media (max-width: ${props => props.theme.query.tablet}) {
    width: 77%;
  }
  @media (max-width: ${props => props.theme.query.mobile}) {
    flex: 1;
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
  }
`
