import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SettingsConsumer } from '../../context/SettingsContext.js'

export default class NavItem extends Component {
  render() {
    const { active } = this.props

    if (active) {
      return (
        <SettingsConsumer>
          {value => {
            return (
              <ActiveContainer
                crt={value.settings.crt ? 'true' : 'false'}
                active={active ? 'true' : 'false'}
                to={this.props.linkUrl}
              >
                <Border />
                <Content>{this.props.children}</Content>
                <Border />
              </ActiveContainer>
            )
          }}
        </SettingsConsumer>
      )
    } else {
      return (
        <SettingsConsumer>
          {value => {
            return (
              <Container
                crt={value.settings.crt ? 'true' : 'false'}
                active={active ? 'true' : 'false'}
                to={this.props.linkUrl}
              >
                {this.props.children}
              </Container>
            )
          }}
        </SettingsConsumer>
      )
    }
  }
}

const Container = styled(Link)`
  border: 1px solid ${props => props.theme.navigation.border};
  box-shadow: inset 0 0 0 1px ${props => props.theme.navigation.borderShadow};
  border-radius: 1px;
  padding: 10px;
  flex-grow: 1;
  margin-bottom: 6px;
  width: 80%;
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.navigation.fontColor};
  text-decoration: none;
  animation: ${props => (props.crt ? props.theme.textShadow : 'none')};
`

const ActiveContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  border: 1px solid ${props => props.theme.navigation.border_active};
  box-shadow: inset 0 0 0 1px
    ${props => props.theme.navigation.borderShadow_active};
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: 6px;
  width: 100%;
  color: ${props => props.theme.navigation.fontColor};
  text-decoration: none;
  animation: ${props => (props.crt ? props.theme.textShadow : 'none')};
`

const Border = styled.div`
  width: 8%;
  background: ${props => props.theme.navigation.border_active};
  animation: clicked-keyframes 1s;

  @keyframes clicked-keyframes {
    from {
      width: 0%;
    }
    to {
      width: 8%;
    }
  }
`

const Content = styled.div`
  padding: 10px;
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
  display: flex;
  align-items: center;
  text-align: center;
`
