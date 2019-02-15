import React, { Component } from 'react'
import styled from 'styled-components'
import Piece from './Piece'
const NUM_ROWS = 5
const NUM_COLS = 5
const MAX_FILLED = 12
const BASE_PERCENT = 40

class MinigameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
      pieces: [],
    }
  }

  componentDidMount() {
    const pieces = []

    for (let i = 0; i < 3; i++) {
      pieces.push(this.createPieces(8))
    }
    this.setState({
      pieces,
    })
  }

  renderPieces() {
    return this.state.pieces.map((piece, index) => {
      return <Piece data={piece} index={index} key={`piece-${index}`} />
    })
  }

  createPieces() {
    const piece = [[], [], [], [], []]
    let percent_addition = 0
    let num_filled = 0
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        if (num_filled <= MAX_FILLED) {
          let isFilled = Math.floor(Math.random() * 100)
          if (isFilled <= BASE_PERCENT + percent_addition) {
            piece[row][col] = true
            num_filled++
          } else {
            piece[row][col] = false
            percent_addition += 1
          }
        } else {
          piece[row][col] = false
        }
      }
    }

    return piece
  }

  render() {
    return <Container>{this.renderPieces()}</Container>
  }
}

export default MinigameContainer

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  padding: 20px;
  border: 5px solid white;
  margin: 20px;
  /* background: ${props => props.theme.colors.darkGreen}; */
  background: #38a54e;
`
