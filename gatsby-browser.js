/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/components/layout.css'
import { ThemeProvider } from 'styled-components'

import React from 'react'

import { SettingsProvider } from './src/context/SettingsContext'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={{ color: 'red' }}>
    <SettingsProvider>{element}</SettingsProvider>
  </ThemeProvider>
)
