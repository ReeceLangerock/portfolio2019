import React, { Component } from 'react'
import styled from 'styled-components'
import SkillLevel from './SkillLevel'

class SkillSet extends Component {
  render() {
    return (
      <div>
        <h2>Personel Skill Set:</h2>
        <Row>
          React <SkillLevel level={9} />
        </Row>
        <Row>
          Redux <SkillLevel level={7} />
        </Row>
        <Row>
          React Native <SkillLevel level={5} />
        </Row>
        <Row>
          Jest <SkillLevel level={2.5} />
        </Row>
        <Row>
          Node.js / Express.js <SkillLevel level={7.5} />
        </Row>
        <Row>
          Gatsby.js / Next.js <SkillLevel level={5} />
        </Row>
        <Row>
          MongoDB <SkillLevel level={6} />
        </Row>
        <Row>
          PL/SQL <SkillLevel level={3.5} />
        </Row>
        <Row>
          HTML/CSS/SASS <SkillLevel level={9} />
        </Row>

        <Row>
          Java <SkillLevel level={1.5} />
        </Row>

        <h3>Currently Learning:</h3>
        <Row>
          GraphQL <SkillLevel level={4} />
        </Row>
        <Row>
          Python <SkillLevel level={2} />
        </Row>
        <br />
      </div>
    )
  }
}

export default SkillSet

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 6px;
  align-items: center;
  font-size: 36px;
  color: ${props => props.theme.color};
`
