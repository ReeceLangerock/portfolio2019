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
              const { loadingScreen } = value.settings
              const theme = value.settings.darkMode ? themes.dark : themes.light

              console.log(theme)
              return (
                <ThemeProvider theme={theme}>
                  <LayoutContainer>
                    <GlobalStyles />
                    <Screen>
                      <InnerScreen className={CRT}>
                        {loadingScreen && !value.loadingScreenShown && (
                          <LoadingScreen onLoad={value.onLoad} />
                        )}

                        {(!loadingScreen || value.loadingScreenShown) &&
                          (<Header loading siteTitle="Personal Terminal" />,
                          <Page>{children}</Page>)}
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
`

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.screenFrameColor};
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`

const Screen = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  border-left: 40px solid #020701;
  border-right: 40px solid #020701;
  border-top: 25px solid #020701;
  border-bottom: 25px solid #020701;
  /* box-shadow: inset 0px 0px 1px #fff; */
`
const InnerScreen = styled.div`
  height: 100%;
  position: relative;
  background: #041704;

  width: 100%;
  border-radius: 0.8em;
  box-shadow: 0 0 0 0.6em #020701;
  outline: 0.65em solid #020701;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
