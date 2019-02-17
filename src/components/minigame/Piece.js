import React, { Component } from 'react'
import styled from 'styled-components'

class Piece extends Component {
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
    return <Container key={this.props.index}>{this.renderSections()}</Container>
  }
}

export default Piece

const Container = styled.div`
  max-width: 115px;
  display: flex;
  max-height: 115px;
  flex-wrap: wrap;
`
const Section = styled.div`
  background: ${props => (props.filled ? props.theme.colors.white : '#38a54e')};
  height: 23px;
  width: 23px;
`
