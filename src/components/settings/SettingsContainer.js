import React, { Component } from 'react'
import styled from 'styled-components'
import Label from './Label'
import Checkbox from './Checkbox'
import { SettingsConsumer } from '../../context/SettingsContext'
import LE from './../content/languageElements'

export default class SettingsContainer extends Component {
  render() {
    return (
      <SettingsConsumer>
        {({ settings, onChangeSetting }) => {
          //temporary
          const LANG = settings.language ? 'en' : 'en'
          return (
            <Container>
              <Row>
                <Label>{LE.crt[LANG]}:</Label>
                <Checkbox
                  active={settings.crt}
                  onClick={onChangeSetting}
                  soundEffects={settings.soundEffects}
                  setting="crt"
                />
              </Row>
              <Row>
                <Label>Dark Mode:</Label>
                <Checkbox
                  active={settings.darkMode}
                  soundEffects={settings.soundEffects}
                  onClick={onChangeSetting}
                  setting="darkMode"
                />
              </Row>
              <Row>
                <Label>{LE.soundEffects[LANG]}:</Label>
                <Checkbox
                  soundEffects={settings.soundEffects}
                  active={settings.soundEffects}
                  onClick={onChangeSetting}
                  setting="soundEffects"
                />
              </Row>
              <Row>
                <Label>{LE.loadingScreen[LANG]}:</Label>
                <Checkbox
                  active={settings.loadingScreen}
                  soundEffects={settings.soundEffects}
                  onClick={onChangeSetting}
                  setting="loadingScreen"
                />
              </Row>
              {/* DISABLING THIS FOR NOW */}
              {/* <Row>
                <Label>{LE.language[LANG]}:</Label>
                <Checkbox
                  active={settings.language}
                  onClick={onChangeSetting}
                  setting="language"
                  text={['English', 'German']}
                />
              </Row> */}

              <p>Preferences will be stored on this terminal only*</p>
            </Container>
          )
        }}
      </SettingsConsumer>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  height: 100%;

  @media (max-width: 1000px) {
    padding: 20px 30px;
  }
  @media (max-width: ${props => props.theme.query.tablet}) {
    padding: 15px 20px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: ${props => props.theme.query.small}) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`
