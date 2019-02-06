import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavContainer from './../components/navigation/NavContainer'
import ContentWrapper from './../components/content/ContentWrapper'
import ContentHeader from './../components/content/ContentHeader'
import ContentContainer from './../components/content/ContentContainer'
import styled from 'styled-components'
import SkillLevel from '../components/content/SkillLevel'
const IndexPage = () => (
  <Layout active="about">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NavContainer active="" />
    <ContentWrapper>
      <ContentHeader headerText="About" />
      <ContentContainer>
        <StyledContent>
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

          <p>
            hi! my name is reece and I'm a chicago based front-end developer
            take a look around and let me know below if you have any questions!
          </p>

          <h2>Personel Skill Set</h2>

          <h4>Proficient</h4>

          <Row>
            React <SkillLevel level={4.5} />
          </Row>

          <h2>Terminal Specifications:</h2>
          <Row>
            Hardware Manufacture Date: <b>February 2019</b>
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
        </StyledContent>
      </ContentContainer>
    </ContentWrapper>
  </Layout>
)

export default IndexPage

const StyledContent = styled.div`
  padding: 20px 30px;
  h4 {
    font-size: 32px;
    font-weight: bold;
  }
  h2 {
    font-size: 40px;
    font-weight: bold;
  }
  p {
    font-size: 28px;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5px;
  align-items: center;
  font-size: 32px;
`

const Li = styled.li`
  font-size: 28px;
  margin: 0;
`

const Ul = styled.ul`
  list-style-type: square;
`
