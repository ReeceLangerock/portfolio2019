import React, { Component } from 'react'
import styled from 'styled-components'

class Choice extends Component {
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
    const { correctChoice, onClick } = this.props
    return (
      <OuterContainer
        onClick={e => onClick(correctChoice, e)}
        correctChoice={correctChoice}
        key={this.props.index}
      >
        <Container>{this.renderSections()}</Container>
      </OuterContainer>
    )
  }
}

export default Choice

const OuterContainer = styled.div`
  border: 3px solid transparent;
  :hover {
    border: 3px solid white;
  }
`
const Container = styled.div`
  max-width: 100px;
  display: flex;
  max-height: 100px;
  flex-wrap: wrap;
  border: ${props =>
    props.correctChoice === true ? '2px solid red' : '2px solid white'};

  box-sizing: content-box;
  padding: 7px 20px;
  cursor: pointer;
`
const Section = styled.div`
  background: ${props => (props.filled ? props.theme.colors.white : '#38a54e')};
  height: 20px;
  width: 20px;
`
