import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <NavContainer active="contact" />
      <ContentWrapper>
        <ContentHeader headerText="contact" />
        <ContentContainer>
          <ContactContainer>
            <ContactRow>
              <span>Email:</span> <span>reecelangerock@gmail.com</span>
            </ContactRow>
            <ContactRow>
              <span>Github:</span>{' '}
              <a href="https://github.com/ReeceLangerock" target="_blank">
                https://github.com/ReeceLangerock
              </a>
            </ContactRow>
            <ContactRow>
              <span>LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/reece-langerock/"
                target="_blank"
              >
                https://www.linkedin.com/in/reece-langerock/
              </a>
            </ContactRow>
            <ContactRow>
              <span>Twitter:</span>{' '}
              <a href = "https://twitter.com/ReeceLangerock">https://twitter.com/ReeceLangerock</a>
            </ContactRow>
          </ContactContainer>
        </ContentContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default SecondPage

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 70px;
  height: 100%;
`

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 40px;

  a {
    color: white;
    transition: .5s ease-in-out all;


    &:hover {
      color: #21d077;
      transition: .25s ease-in-out all;
    }
  }
`
