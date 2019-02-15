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
    return <Container key={this.props.index}>{this.renderSections()}</Container>
  }
}

export default Choice

const Container = styled.div`
  max-width: 150px;
  display: flex;
  max-height: 150px;
  flex-wrap: wrap;
  border: 2px solid white;
  box-sizing: content-box;
  padding: 5px;
`
const Section = styled.div`
  background: ${props => (props.filled ? props.theme.colors.white : '#38a54e')};
  height: 30px;
  width: 30px;
`