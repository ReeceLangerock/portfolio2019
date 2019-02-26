import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import Sevastopol from './../Sevastopol-Interface.ttf'
import { createGlobalStyle } from 'styled-components'
import { SettingsConsumer } from '../context/SettingsContext.js'
import LoadingScreen from './content/LoadingScreen'
import { ThemeProvider } from 'styled-components'
import * as themes from './../themes/theme.js'

const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family: Sevastopol;
    src: local
    (${Sevastopol});
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
    render={data => {
      return (
        <>
          <SettingsConsumer>
            {value => {
              const CRT = value.settings.crt ? 'crt' : ''
              const { loadingScreen, soundEffects } = value.settings
              const theme = value.settings.darkMode ? themes.dark : themes.light

              const loadingVisible = loadingScreen && !value.loadingScreenShown
              console.log('loadingVisible', loadingVisible)
              return (
                <ThemeProvider theme={theme}>
                  <LayoutContainer>
                    <GlobalStyles />
                    <Screen>
                      <InnerScreen className={CRT}>
                        {loadingVisible && (
                          <LoadingScreen
                            onLoad={value.onLoad}
                            soundEffects={soundEffects}
                          />
                        )}

                        {(value.loadingScreenShown || !loadingScreen) && (
                          <>
                            <Header
                              siteTitle="Personal Terminal"
                              key="siteHeader"
                            />
                            <Page>{children}</Page>
                          </>
                        )}
                      </InnerScreen>
                    </Screen>
                  </LayoutContainer>
                </ThemeProvider>
              )
            }}
          </SettingsConsumer>
        </>
      )
    }}
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
  @media (max-width: ${props => props.theme.query.mobile}) {
    flex-direction: column;
  }
`

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.monitor.frame};
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`

const Screen = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  border-left: 40px solid;
  border-right: 40px solid;
  border-top: 25px solid;
  border-bottom: 25px solid;
  border-color: ${props => props.theme.monitor.frame};
  @media (max-width: ${props => props.theme.query.tablet}) {
    border-left-width: 15px;
    border-right-width: 15px;
    border-bottom-width: 10px;
    border-top-width: 10px;
  }

  @media (max-width: ${props => props.theme.query.small}) {
    border-left-width: 8px;
    border-right-width: 8px;
    border-bottom-width: 5px;
    border-top-width: 5px;
  }
`
const InnerScreen = styled.div`
  height: 100%;
  position: relative;
  background: ${props => props.theme.monitor.screen};
  width: 100%;
  border-radius: 0.8em;
  box-shadow: 0 0 0 0.6em ${props => props.theme.monitor.frame};
  outline: 0.65em solid ${props => props.theme.monitor.frame};
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${props => props.theme.query.tablet}) {
    padding: 10px 10px;
    max-height: 100%;
    justify-content: flex-start;
  }
  @media (max-width: ${props => props.theme.query.small}) {
    padding: 8px;
  }
`
