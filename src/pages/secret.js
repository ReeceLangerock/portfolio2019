import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
import MinigameContainer from '../components/minigame/MinigameContainer'
const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Secret" />
      <NavContainer active="secret" />
      <ContentWrapper>
        <ContentHeader headerText="secret" />
        <ContentContainer>
          <MinigameContainer />
        </ContentContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default SecondPage

const FileContainer = styled.div``
