import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Files" />
      <NavContainer active="files" />
      <ContentWrapper>
        <ContentHeader headerText="files" />
        <ContentContainer>
          <FileContainer>

          No Files
          </FileContainer>
        </ContentContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default SecondPage


const FileContainer = styled.div`
padding: 30px 70px;
`