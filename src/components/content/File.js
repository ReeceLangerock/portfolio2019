import React, { Component } from 'react'
import styled from 'styled-components'

export default class File extends Component {
  render() {
    const { name, filename } = this.props
    return (
      <Container href={`/${filename}`} download>
        <span>{name}</span>
        <span>Download File</span>
      </Container>
    )
  }
}

const Container = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  background: ${props => props.theme.content_item.background};
  color: ${props => props.theme.content_item.fontColor};
  font-size: 32px;
  border-bottom: 1px solid ${props => props.theme.content_item.border_bottom};
  padding: 15px;
  transition: 0.25s ease-in-out all;
  cursor: pointer;
  span {
    margin-right: 5px;
  }
  :hover {
    background: ${props => props.theme.content_item.background_active};
    transition: 0.25s ease-in-out all;
  }

  @media (max-width: ${props => props.theme.query.small}) {
    font-size: 27px;
    padding: 10px;
  }
`
