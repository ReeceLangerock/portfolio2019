import React, { Component } from 'react'
import styled from 'styled-components'

class SkillLevel extends Component {
  renderLevel() {
    let { level } = this.props
    const hasHalf = level % 1 !== 0
    level = Math.floor(level)
    let levels = []
    let emptyLevels = []
    for (let i = 0; i < 10; i++) {
      if (i < level) {
        levels.push(<Level />)
      } else {
        emptyLevels.push(<Level empty="inherit" />)
      }
    }

    if (hasHalf) {
      levels.push(<Level half />)
      emptyLevels.pop()
    }

    return [...levels, ...emptyLevels]
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
  height: 36px;
  width: 36px;
  border: 1px solid ${props => props.theme.skill_level.border};
  margin-right: 5px;
  background: ${props =>
    props.half
      ? 'linear-gradient(to right, ' +
        props.theme.skill_level.background +
        ' 0%, ' +
        props.theme.skill_level.background +
        ' 50%, ' +
        props.theme.skill_level.background_half +
        ' 50%, #091d0d 100%)'
      : props.theme.skill_level.background};
  background: ${props => props.empty};
`
