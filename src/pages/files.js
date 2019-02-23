import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
import File from './../components/content/File'
const Files = () => {
  return (
    <Layout>
      <SEO title="Files" />
      <NavContainer active="files" />
      <ContentWrapper>
        <ContentHeader headerText="files" />
        <ContentContainer>
          <FileContainer>
            <File name="Résumé.pdf" filename="resume.pdf" type="pdf" />
            <File name="Résumé.doc" filename="resume.doc" />
            <File name="Terminal Stylesheet" filename="stylesheet.js" />
          </FileContainer>
        </ContentContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default Files

const FileContainer = styled.div``
