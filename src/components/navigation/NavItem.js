import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SettingsConsumer } from '../../context/SettingsContext.js'
import nav1 from './../../../static/page_select.mp3'
// import nav2 from './../../../static/page_select.mp3'

export default class NavItem extends Component {
  playSoundEffect(soundEffects) {
    if (true) {
      const audio = new Audio(nav1)
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {})
          .catch(error => {
            console.error(error)
          })
      }
    }
  }

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
                onClick={e => this.playSoundEffect(value.settings.soundEffects)}
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
                onClick={e => this.playSoundEffect(value.settings.soundEffects)}
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
  width: 84%;
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
  @media (max-width: ${props => props.theme.query.mobile}) {
    width: 180px;
    flex-grow: 0;
    padding: 4px;
    margin-bottom: 5px;
  }
  @media (max-width: ${props => props.theme.query.small}) {
    width: 95px;
    font-size: 24px;
    padding: 3px;
    margin-bottom: 4px;
  }
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
  @media (max-width: ${props => props.theme.query.mobile}) {
    width: 180px;
    flex-grow: 0;
    margin-bottom: 5px;
  }
  @media (max-width: ${props => props.theme.query.small}) {
    width: 95px;
    margin-bottom: 4px;
  }
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

  @media (max-width: ${props => props.theme.query.mobile}) {
    width: 15px;

    @keyframes clicked-keyframes {
      from {
        width: 0px;
      }
      to {
        width: 15px;
      }
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
  @media (max-width: ${props => props.theme.query.small}) {
    font-size: 24px;
    padding: 3px;
  }
`
