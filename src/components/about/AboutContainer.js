import React, { Component } from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

class AboutContainer extends Component {
  render() {
    const NOW = new Date()
    return (
      <Container>
        <h2>Personel File: Reece Langerock</h2>
        <Row hover>
          Location: <b>Chicago</b>
        </Row>
        <Row hover>
          Employment Status: <b>Employed</b>
        </Row>
        <Row hover>
          Recruitment Status: <b>Open to Offers</b>
        </Row>
        <Row>Personal Synopsis:</Row>
        <p>
          Hello, I'm Reece. I'm a Fullstack Developer currently working remotely
          from the Chicago suburbs. As a self-taught programmer and lifelong
          learner I have that constant itch to try something new. That is what
          drew me to development in the first place, there's always a new
          problem to solve or technology to master. You'll notice that I've
          included below a few skills that I'm currently learning. What is not
          include are the many technologies on my "to-do" list.
        </p>
        <h2>Skill Set Matrix</h2>
        <GridLabel>Front-End:</GridLabel>
        <SkillGrid>
          <Skill>React</Skill>
          <Skill>Redux</Skill>
          <Skill>Lit-HTML</Skill>
          <Skill>React Native</Skill>
          <Skill>Gatsby.js**</Skill>
          <Skill>Next.js</Skill>
        </SkillGrid>

        <GridLabel>Back-End:</GridLabel>
        <SkillGrid>
          <Skill>Node.js / Express.js</Skill>
          <Skill>MongoDB</Skill>
          <Skill>AWS Lambda</Skill>
          <Skill>GraphQL**</Skill>
          <Skill>PL/SQL</Skill>
        </SkillGrid>

        <GridLabel>Miscellaneous:</GridLabel>
        <SkillGrid>
          <Skill>Git</Skill>
          <Skill>Jest</Skill>
          <Skill>Mocha / Karma</Skill>
          <Skill>Heroku</Skill>
          <Skill>SASS / Styled Components</Skill>
        </SkillGrid>

        <p>**currently learning this skill</p>
        <br />
        <GridLabel>Personal Interests:</GridLabel>
        <SkillGrid>
          <Skill>Family</Skill>
          <Skill>Nasa / SpaceX</Skill>
          <Skill>NFL</Skill>
          <Skill>Reading</Skill>
          <Skill>Fantasy Football</Skill>
          <Skill>Video Games</Skill>
          <Skill>Cooking</Skill>
        </SkillGrid>
        <h2>Terminal Specifications:</h2>
        <Row>
          Terminal Manufacture Date: <b>February 2019</b>
        </Row>
        <Row>
          Software Copyright Date:{' '}
          <b>
            <Moment format="MMMM YYYY">{NOW}</Moment>
          </b>
        </Row>
        <Row>Software Built With:</Row>
        <Ul>
          <Li>React</Li>
          <Li>React Context API</Li>
          <Li>GraphQL</Li>
          <Li>GraphCMS</Li>
          <Li>Gatsby</Li>
          <Li>Styled-Components</Li>
        </Ul>
      </Container>
    )
  }
}

export default AboutContainer

const SkillGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-bottom: 25px;

  @media (max-width: ${props => props.theme.query.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    margin-bottom: 15px;
  }
`

const Skill = styled.div`
  font-size: 28px;
  font-weight: bold;
  border: 1px solid red;
  text-align: center;
  padding: 10px 5px;
  border: 1px solid ${props => props.theme.skill_level.border};
  transition: 0.5s ease-in-out all;

  color: ${props => props.theme.color};
  :hover {
    background: ${props => props.theme.skill_level.border};
    color: ${props => props.theme.skill_level.color};

    transition: 0.5s ease-in-out all;
  }

  @media (max-width: ${props => props.theme.query.tablet}) {
    font-size: 24px;
  }
`
const GridLabel = styled.div`
  color: ${props => props.theme.color};
  font-size: 36px;
  margin-bottom: 5px;
`

const Container = styled.div`
  padding: 25px 50px;

  h2 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: ${props => props.theme.fontSizes.p};
  }
  @media (max-width: ${props => props.theme.query.tablet}) {
    padding: 10px 15px;
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 24px;
    }
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
  align-items: center;
  font-size: 40px;
  border-bottom: 1px solid transparent;
  color: ${props => props.theme.color};

  ${props => {
    if (props.hover) {
      return (
        ':hover {    border-bottom: 1px solid white;  };' +
        'transition: .3s ease-in-out all'
      )
    }
  }};

  @media (max-width: ${props => props.theme.query.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${props => props.theme.query.mobile}) {
    font-size: 32px;
  }
  @media (max-width: ${props => props.theme.query.small}) {
    display: flex;
    flex-direction: column;
    text-align: center;

    b {
      margin-top: 5px;
    }
  }
`

const Li = styled.li`
  font-size: 28px;
  margin: 0;
`

const Ul = styled.ul`
  list-style-type: square;
`
