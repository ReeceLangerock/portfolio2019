import React, { Component } from 'react'
import styled from 'styled-components'

class Choice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
    }
  }

  handleWrongChoice() {
    this.setState({
      error: true,
    })

    setTimeout(() => {
      this.setState({
        error: false,
      })
    }, 500)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.level !== this.props.level ||
      nextState.error !== this.state.error
    ) {
      return true
    }
    return false
  }
  renderSections() {
    const { data, index } = this.props
    return data.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        if (col) {
          return <Section filled key={`${index}-${rowIndex}-${colIndex}`} />
        } else {
          return <Section key={`${index}-${rowIndex}-${colIndex}`} />
        }
      })
    })
  }
  render() {
    const { index, onClick, correctChoice } = this.props
    const { error } = this.state
    return (
      <OuterBorder error={error}>
        <Container
          error={error}
          key={index}
          onClick={() => {
            if (!correctChoice) {
              this.handleWrongChoice()
            }
            onClick(index)
          }}
        >
          {this.renderSections()}
        </Container>
      </OuterBorder>
    )
  }
}

export default Choice

const Container = styled.div`
  max-width: 135px;
  max-height: 135px;
  display: flex;
  flex-wrap: wrap;
  border: 3px solid ${props => props.theme.colors.lightGreen};
  border-color: ${props =>
    props.error ? 'red' : props.theme.colors.lightGreen};

  box-sizing: content-box;
  cursor: pointer;
  padding: 5px;
  transition: 0.4s ease-in-out;

  :hover {
    border-color: ${props => props.theme.colors.white};
    border-color: ${props => (props.error ? 'red' : props.theme.colors.white)};

    transition: 0.4s ease-in-out;
  }

  @media (max-height: 800px) {
    max-width: 100px;
    max-height: 100px;
  }
`

const OuterBorder = styled.div`
  border: 3px solid transparent;
  transition: 0.4s ease-in-out;

  :hover {
    border-color: ${props => props.theme.colors.white};
    border-color: ${props => (props.error ? 'red' : props.theme.colors.white)};

    transition: 0.4s ease-in-out;
  }
  border-color: ${props => (props.error ? 'red' : 'none')};
`
const Section = styled.div`
  background: ${props => (props.filled ? props.theme.colors.white : '#38a54e')};
  height: 27px;
  width: 27px;

  @media (max-height: 800px) {
    height: 20px;
    width: 20px;
  }
`
