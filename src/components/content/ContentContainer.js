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
  border: 1px solid #05b96b;
  border-top: 30px solid #00ff7a;
  width: 100%;
  flex: 1;
  color: white;
  font-family: 'Sevastopol';
  position: relative;
  animation: ${props => (props.crt ? 'textShadow 2.6s infinite' : 'none')};
  &::-webkit-scrollbar {
    width: 18px;
    background: #081007;
    border-right: 1px solid #05b96b;
    border-left: 1px solid #05b96b;
  }
  &::-webkit-scrollbar-thumb {
    background: #007648;
    padding: 1px;
    width: 16px;
  }
  overflow-y: auto;
  p,
  h1,
  h2,
  h3 {
    font-family: 'Sevastopol';
  }
`
