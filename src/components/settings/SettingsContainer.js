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
          const LANG = settings.language ? 'en' : 'de'
          return (
            <Container>
              <Row>
                <Label>{LE.crt[LANG]}:</Label>
                <Checkbox
                  active={settings.crt}
                  onClick={onChangeSetting}
                  setting="crt"
                />
              </Row>
              <Row>
                <Label>Dark Mode:</Label>
                <Checkbox
                  active={settings.darkMode}
                  onClick={onChangeSetting}
                  setting="darkMode"
                />
              </Row>
              <Row>
                <Label>{LE.soundEffects[LANG]}:</Label>
                <Checkbox
                  active={settings.soundEffects}
                  onClick={onChangeSetting}
                  setting="soundEffects"
                />
              </Row>
              <Row>
                <Label>{LE.loadingScreen[LANG]}:</Label>
                <Checkbox
                  active={settings.loadingScreen}
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
  padding: 30px 70px;
  height: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  align-items: center;
`
