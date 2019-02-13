import React, { Component } from 'react'
import styled from 'styled-components'
import SkillLevel from './SkillLevel'

class AboutContainer extends Component {
  render() {
    return (
      <Container>
        <h2>Personel File: Reece Langerock</h2>
        <Row>
          Location: <b>Chicago</b>
        </Row>
        <Row>
          Employment Status: <b>Employed</b>
        </Row>
        <Row>
          Recruitment Status: <b>Open to new Opportunities</b>
        </Row>
        <Row>Personal Synopsis:</Row>

        <p>Enter Synopsis here</p>

        <h2>Skill Set Matrix</h2>

        {/* <SkillGrid>
            <SkillRow>
                <span>

                </span>
            </SkillRow>
          <div>React</div>
          <div>React</div>
          <div>Redux</div>
          <div>Jest</div>
          <div>React</div>
          <div>React</div>
        </SkillGrid> */}

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

        <h2>Personal Interests:</h2>
        <p>stuff</p>
        <h2>Terminal Specifications:</h2>
        <Row>
          Terminal Manufacture Date: <b>February 2019</b>
        </Row>
        <Row>
          Software Copyright Date: <b>February 2019</b>
        </Row>
        <Row>Software Built With:</Row>
        <Ul>
          <Li>React</Li>
          <Li>React Context API</Li>
          <Li>GraphQL</Li>
          <Li>Gatsby</Li>
          <Li>Styled-Components</Li>
        </Ul>
      </Container>
    )
  }
}

export default AboutContainer

const SkillGrid = styled.div``

const Container = styled.div`
  padding: 25px 50px;
  h4 {
    color: ${props => props.theme.color};

    font-size: 32px;
    font-weight: bold;
  }
  h2 {
    font-size: 40px;
    font-weight: bold;
  }
  h3 {
    font-size: 36px;
    font-weight: bold;
    margin: 15px 0 10px 0;
  }
  p {
    font-size: 28px;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 6px;
  align-items: center;
  font-size: 36px;
  color: ${props => props.theme.color};
`

const Li = styled.li`
  font-size: 28px;
  margin: 0;
`

const Ul = styled.ul`
  list-style-type: square;
`