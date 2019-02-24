import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
import styled from 'styled-components'
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NavContainer active="404" />
    <ContentWrapper>
      <ContentHeader headerText="ERROR Code: 404" />
      <ContentContainer>
        <Container>
          <p>The folder you are trying to access is corrupted.</p>

          <p>
            Please select a valid folder. If you believe you have received this
            error in error, please contact your system administrator.
          </p>
        </Container>
      </ContentContainer>
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage

const Container = styled.div`
  padding: 20px 30px;

  p {
    font-size: 32px;
  }
`
