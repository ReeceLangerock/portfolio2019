import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
import MinigameContainer from '../components/minigame/MinigameContainer'
import { MiniGameProvider, MiniGameConsumer } from '../context/MinigameContext'
const Minigame = () => {
  return (
    <Layout>
      <SEO title="Security Access" />
      <NavContainer active="restricted" />
      <ContentWrapper>
        <ContentHeader headerText="Security Access" />
        <MiniGameProvider>
          <ContentContainer noHeader="border-top-width: 1px">
            <MiniGameConsumer>
              {context => {
                return <MinigameContainer context={context} />
              }}
            </MiniGameConsumer>
          </ContentContainer>
        </MiniGameProvider>
      </ContentWrapper>
    </Layout>
  )
}

export default Minigame
