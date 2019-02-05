import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavContainer from './../components/navigation/NavContainer'
import ContentWrapper from './../components/content/ContentWrapper'
import ContentHeader from './../components/content/ContentHeader'
import ContentContainer from './../components/content/ContentContainer'
import styled from 'styled-components'
const IndexPage = () => (
  <Layout active="about">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NavContainer active="" />
    <ContentWrapper>
      <ContentHeader headerText="About" />
      <ContentContainer>
        <StyledContent>

        <h2>Personal Portfolio of Reece Langerock</h2>
        <p>
          hi! my name is reece and I'm a chicago based front-end developer take
          a look around and let me know below if you have any questions!
        </p>
        </StyledContent>
      </ContentContainer>
    </ContentWrapper>
  </Layout>
)

export default IndexPage


const StyledContent = styled.div`

`