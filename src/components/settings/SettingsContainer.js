import React, { Component } from 'react'
import styled from 'styled-components'
import Label from './Label'
import Checkbox from './Checkbox'
import { SettingsConsumer } from '../../context/SettingsContext'

export default class SettingsContainer extends Component {
  render() {
    return (
      <SettingsConsumer>
        {({ settings, onChangeSetting }) => {
          return (
            <Container>
              <Row>
                <Label>CRT Flicker:</Label>
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
                <Label>Sound Effects:</Label>
                <Checkbox
                  active={settings.soundEffects}
                  onClick={onChangeSetting}
                  setting="soundEffects"
                />
              </Row>
              <Row>
                <Label>Loading Screen:</Label>
                <Checkbox
                  active={settings.loadingScreen}
                  onClick={onChangeSetting}
                  setting="loadingScreen"
                />
              </Row>

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
  padding: 10px 40px;
  height: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  align-items: center;
`
