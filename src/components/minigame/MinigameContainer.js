import React, { Component } from 'react'
import styled from 'styled-components'
import Piece from './Piece'
import Choice from './Choice'
const NUM_ROWS = 5
const NUM_COLS = 5
const MAX_FILLED = 12
const BASE_PERCENT = 40

class MinigameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 0,
      pieces: [],
      choices: [],
    }
  }

  componentDidMount() {
    const pieces = []
    const choices = []

    for (let i = 0; i < 3; i++) {
      pieces.push(this.createPieces())
    }
    for (let i = 0; i < 7; i++) {
      choices.push(this.createPieces())
    }
    this.setState({
      pieces,
      choices,
    })
  }

  renderPieces() {
    return this.state.pieces.map((piece, index) => {
      return <Piece data={piece} index={index} key={`piece-${index}`} />
    })
  }

  renderChoices() {
    const { choices, pieces, level } = this.state
    if (!choices.length || !pieces.length) {
      return null
    }
    const randomLocation = Math.floor(Math.random() * 7)
    console.log(randomLocation)
    console.log(choices)
    choices.splice(randomLocation, 0, pieces[level])
    console.log(choices)
    return this.state.choices.map((choice, index) => {
      return <Choice data={choice} index={index} key={`choice-${index}`} />
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
    return (
      <Container>
        <Header>Callback Code</Header>
        <CodeContainer>{this.renderPieces()}</CodeContainer>
        <ChoiceContainer>{this.renderChoices()}</ChoiceContainer>
      </Container>
    )
  }
}

export default MinigameContainer

const Header = styled.div`
  background: white;
  color: #38a54e;
  font-size: 100px;
  margin: 0 10px;
  line-height: 1;
  letter-spacing: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  padding: 20px;

  /* background: ${props => props.theme.colors.darkGreen}; */
  background: #38a54e;
`
const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 5px solid white;
  padding: 30px 20px;
  margin: 0 10px 20px 10px;
  justify-content: center;
`
const ChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  justify-items: center;
  grid-gap: 10px;
`
