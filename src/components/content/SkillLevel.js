import React, { Component } from 'react'
import styled from 'styled-components'

class SkillLevel extends Component {
  renderLevel() {
    let { level } = this.props
    console.log(level)
    const hasHalf = level % 1 !== 0
    console.log(hasHalf)
    level = Math.floor(level)
    let levels = []
    for (let i = 0; i < level; i++) {
      levels.push(<Level />)
    }

    if (hasHalf) {
      levels.push(<Level half />)
    }
    levels.push(<Level empty="inherit" />)

    return levels
  }
  render() {
    return <Container>{this.renderLevel()}</Container>
  }
}

export default SkillLevel

const Container = styled.div`
  display: flex;
`

const Level = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #00b76e;
  margin-right: 5px;
  background: ${props =>
    props.half
      ? 'linear-gradient(to right, #00b76e 0%, #00b76e 50%, #091d0d 50%, #091d0d 100%)'
      : '#00b76e'};
  background: ${props => props.empty};
`
