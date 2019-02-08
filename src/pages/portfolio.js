import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from './../components/content/ContentHeader'
import ContentContainer from './../components/content/ContentContainer'
import PortfolioContainer from '../components/portfolio/PortfolioContainer'

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="portfolio" />
      <NavContainer active="portfolio" />
      <ContentWrapper>
        <ContentHeader headerText="portfolio" />
        <ContentContainer>
          <PortfolioContainer />
        </ContentContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default Portfolio
