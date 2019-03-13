import React, { Component } from 'react'
import styled from 'styled-components'

class Piece extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.visible !== this.props.visible){
      return true;
    }
    return false;
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
    return <Container visible = {this.props.visible} key={this.props.index}>{this.renderSections()}</Container>
  }
}

export default Piece

const Container = styled.div`
  max-width: 140px;
  max-height: 140px;
  display: flex;
  flex-wrap: wrap;
  opacity: ${props => props.visible ? 1 : 0};
  @media (max-height: 800px) {
    max-width: 130px;
    max-height: 130px;
  }
`
const Section = styled.div`
  background: ${props => (props.filled && props.active ? 'blue' : '#38a54e')};
  background: ${props => (props.filled ? props.theme.colors.white : '#38a54e')};
  height: 30px;
  width: 30px;

  @media (max-height: 800px) {
    height: 24px;
    width: 24px;
  }
`
