import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SettingsConsumer } from '../../context/SettingsContext.js'

export default class ContentWrapper extends Component {
  render() {
    return (
      <SettingsConsumer>
        {value => {
          return (
            <Container crt={value.settings.crt}>
              {this.props.children}
            </Container>
          )
        }}
      </SettingsConsumer>
    )
  }
}

const Container = styled.div`
  border: 1px solid ${props => props.theme.content_container.border};
  border-top: 30px solid ${props => props.theme.content_container.border_top};
  background: ${props => props.theme.content_container.background};
  width: 100%;
  flex: 1;
  color: ${props => props.theme.content_container.font_color};
  font-family: 'Sevastopol';
  position: relative;
  animation: ${props => (props.crt ? 'textShadow 2.6s infinite' : 'none')};
  &::-webkit-scrollbar {
    ${props => props.theme.scrollbar};
  }
  &::-webkit-scrollbar-thumb {
    ${props => props.theme.scrollbar_thumb};
  }
  overflow-y: auto;
  p,
  h1,
  h2,
  h3,
  h4 {
    font-family: 'Sevastopol';
  }
`
