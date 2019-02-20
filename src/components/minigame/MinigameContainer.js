import React, { Component } from 'react'
import styled from 'styled-components'
import Piece from './Piece'
import Choice from './Choice'
import Timer from './Timer'

class MinigameContainer extends Component {
  renderPieces() {
    const { choices, pieces } = this.props.context
    if (!choices.length || !pieces.length) {
      return null
    }
    return pieces.map((piece, index) => {
      return <Piece data={piece} index={index} key={`piece-${index}`} />
    })
  }

  renderChoices() {
    const {
      choices,
      pieces,
      pieceLocation,
      handleChoiceSelection,
    } = this.props.context
    if (!choices.length || !pieces.length) {
      return null
    }
    return choices.map((choice, index) => {
      const correctChoice = index === pieceLocation ? true : false
      return (
        <Choice
          data={choice}
          index={index}
          key={`choice-${index}`}
          correctChoice={correctChoice}
          onClick={handleChoiceSelection}
        />
      )
    })
  }
  componentDidMount() {
    const height = this.divElement.clientHeight
    console.log(height)
    console.log(window.innerHeight)
  }

  render() {
    const { context } = this.props
    return (
      <Container ref={divElement => (this.divElement = divElement)}>
        <div>
          <Header>Callback Code</Header>
          <CodeContainer>{this.renderPieces()}</CodeContainer>
        </div>
        <div>
          <Timer context={context} />
          <ChoiceContainer>{this.renderChoices()}</ChoiceContainer>
        </div>
      </Container>
    )
  }
}

export default MinigameContainer

const Header = styled.div`
  background: white;
  color: #38a54e;
  font-size: 90px;
  line-height: 0.75;
  letter-spacing: 20px;
  @media (max-height: 800px) {
  font-size: 80px;

  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  padding: 10px 10px 7px 10px;
  min-height: 100%;
  background: #38a54e;
`

const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 10px solid white;
  border-top: none;
  padding: 15px 10px;
  margin: 0 0 35px 0;
  justify-content: center;
`
const ChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  justify-items: center;
  grid-gap: 10px;
`
