import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import NavContainer from '../components/navigation/NavContainer'
import ContentWrapper from '../components/content/ContentWrapper'
import ContentHeader from '../components/content/ContentHeader'
import ContentContainer from '../components/content/ContentContainer'
import ContactItem from '../components/content/ContactItem'
const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <NavContainer active="contact" />
      <ContentWrapper>
        <ContentHeader headerText="contact" />
        <ContentContainer>
          <ContactContainer>
            <ContactItem
              type="email"
              link="mailto:reecelangerock@gmail.com"
              text="Shoot me an email"
            />
            <ContactItem
              type="linkedin"
              link="https://www.linkedin.com/in/reece-langerock/"
              text="Connect with me"
            />
            <ContactItem
              type="github"
              link=" https://github.com/ReeceLangerock"
              text="Check out my code"
            />
            <ContactItem
              type="twitter"
              link="https://twitter.com/ReeceLangerock"
              text="tweet @ me"
            />
          </ContactContainer>
        </ContentContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default Contact

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 50px;
  height: 100%;

  @media (max-width: ${props => props.theme.query.tablet}) {
    padding: 15px 30px;
  }
`
