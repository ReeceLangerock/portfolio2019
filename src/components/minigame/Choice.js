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
    const { index, onClick } = this.props
    return (
      <Container key={index} onClick={() => onClick(index)}>
        {this.renderSections()}
      </Container>
    )
  }
}

export default Choice

const Container = styled.div`
  max-width: 135px;
  max-height: 135px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid white;
  box-sizing: content-box;
  padding: 5px;
  cursor: pointer;

  @media (max-height: 800px) {
    max-width: 100px;
    max-height: 100px;
  }
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
