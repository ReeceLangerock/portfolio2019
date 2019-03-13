import React, { Component } from 'react'
import styled from 'styled-components'
import Piece from './Piece'
import Choice from './Choice'
import Timer from './Timer'

class MinigameContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transition: true,
    }
  }

  renderPieces() {
    const { choices, pieces, level } = this.props.context
    if (!choices.length || !pieces.length) {
      return null
    }
    return pieces.map((piece, index) => {
      return (
        <Piece
          data={piece}
          index={index}
          visible={index + 1 > level}
          key={`piece-${index}`}
        />
      )
    })
  }

  renderChoices() {
    const {
      choices,
      pieces,
      pieceLocation,
      handleChoiceSelection,
      level,
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
          level={level}
          correctChoice={correctChoice}
          onClick={handleChoiceSelection}
        />
      )
    })
  }

  render() {
    const { context } = this.props

    if (context.level === 3) {
      return <Success>Access Granted</Success>
    } else if (context.gameStatus === 'fail') {
      setTimeout(() => {
        this.setState({
          transition: false,
        })
      }, 500)
      return (
        <Failure transition={this.state.transition}>
          <div>Access Denied</div>
          <Retry onClick={context.handleRetry}>Retry?</Retry>
        </Failure>
      )
    }
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

const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 100px;
  color: ${props => props.theme.colors.lightGreen};
  padding-bottom: 50px;
`
const Failure = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 100px;
  color: red;
  opacity: ${props => (props.transition ? 0 : 1)};
  transition: 1s ease-in-out all;
`

const Retry = styled.div`
  font-size: 100px;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  line-height: 1;
  padding: 0 20px;
`

const Header = styled.div`
  background: white;
  color: #38a54e;
  font-size: 100px;
  line-height: 0.75;
  letter-spacing: 20px;
  @media (max-height: 800px) {
    font-size: 70px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
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
  margin-bottom: 0px;
`
