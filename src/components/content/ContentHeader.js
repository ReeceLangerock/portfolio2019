import React, { Component } from 'react'
import styled from 'styled-components'
import { SettingsConsumer } from '../../context/SettingsContext.js'

export default class ContentHeader extends Component {
  render() {
    return (
      <SettingsConsumer>
        {value => {
          return (
            <Container crt={value.settings.crt === true}>
              {this.props.headerText}
            </Container>
          )
        }}
      </SettingsConsumer>
    )
  }
}

const Container = styled.div`
  color: ${props => props.theme.content_header.fontColor};
  width: 100%;
  border: 1px solid ${props => props.theme.content_header.border};
  box-shadow: inset 0 0 0 1px
    ${props => props.theme.content_header.borderShadow};
  text-transform: uppercase;
  font-size: 24px;
  border-radius: 1px;
  padding: 10px;
  margin: 15px 0;
  background: ${props => props.theme.content_header.background};
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
  animation: ${props => (props.crt ? props.theme.textShadow : 'none')};
`
