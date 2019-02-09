import React, { Component } from 'react'
import styled from 'styled-components'

export default class File extends Component {
  render() {
    const {name} = this.props
    return (
      <Container href = "/linkedin.png" download>
        <span>
          {name}
        </span>
        <span>
          DL
        </span>
      </Container>
    )
  }
}


const Container = styled.a`
display:flex;
justify-content: space-between;
color: white;
text-decoration: none;

font-size: 32px;
border-bottom: 1px solid #00b968;
padding: 15px;
transition: .25s ease-in-out all;
cursor: pointer;
:hover {
  background: #037744;
  transition: .25s ease-in-out all;
}

`