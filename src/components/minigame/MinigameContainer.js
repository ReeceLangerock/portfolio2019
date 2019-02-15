import React, { Component } from 'react'
import styled from 'styled-components'
class MinigameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
    }
  }

  render() {
    return <Container />
  }
}

export default MinigameContainer

const Container = styled.div``
