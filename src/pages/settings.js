import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
import SettingsContainer from '../components/settings/SettingsContainer';
const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Settings" />
      <NavContainer active = "settings"/>
      <ContentWrapper>
      <ContentHeader headerText="settings" />
      <ContentContainer >
        <SettingsContainer/>
      </ContentContainer >
    </ContentWrapper>
      
    </Layout>
  )
}

export default SecondPage
