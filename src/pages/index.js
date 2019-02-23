import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavContainer from './../components/navigation/NavContainer'
import ContentWrapper from './../components/content/ContentWrapper'
import ContentHeader from './../components/content/ContentHeader'
import ContentContainer from './../components/content/ContentContainer'
import AboutContainer from '../components/about/AboutContainer'
const IndexPage = () => (
  <Layout active="about">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NavContainer active="" />
    <ContentWrapper>
      <ContentHeader headerText="About" />
      <ContentContainer>
        <AboutContainer />
      </ContentContainer>
    </ContentWrapper>
  </Layout>
)

export default IndexPage

