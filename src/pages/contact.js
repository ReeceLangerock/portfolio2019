import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <NavContainer active = "contact"/>
      <ContentWrapper>
      <ContentHeader headerText="contact" />
      <ContentContainer />
    </ContentWrapper>
      
    </Layout>
  )
}

export default SecondPage
