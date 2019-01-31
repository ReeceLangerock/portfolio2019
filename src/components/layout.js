import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './layout.css'
import Header from './header'
import NavContainer from './navigation/NavContainer'
import ContentWrapper from './content/ContentWrapper'
import Sevastopol from './Sevastopol-Interface.ttf'

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family: Sevastopol;
    src: url(${Sevastopol});
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <LayoutContainer>
          <GlobalStyles/>
          <Screen>
            <InnerScreen>
              <Header />
              <Page>
                <NavContainer />
                <div> || </div>
                <ContentWrapper />
              </Page>
            </InnerScreen>
          </Screen>
        </LayoutContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Page = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #041704;
`

const Screen = styled.div`
  height: 100%;
  width: 100%;
  border-left: 40px solid #020701;
  border-right: 40px solid #020701;
  border-top: 20px solid #020701;
  border-bottom: 20px solid #020701;
`
const InnerScreen = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  border-radius: 0.8em;
  box-shadow: 0 0 0 0.6em #020701;
  outline: 0.65em solid #020701;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
`
