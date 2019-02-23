import React, { Component } from 'react'
import styled from 'styled-components'
import onSound from './../../../static/settings_on.mp3'
import offSound from './../../../static/sound_effects_off.mp3'

export default class Checkbox extends Component {
  playSoundEffect(onOff) {
    const sound = onOff ? onSound : offSound
    if (this.props.soundEffects) {
      const audio = new Audio(sound)
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
    const { active, onClick, setting, text } = this.props
    console.log(this.props)
    return (
      <StyledCheckbox>
        <OnOff
          active={active}
          onClick={e => {
            this.playSoundEffect(true)
            onClick(setting, true)
          }}
        >
          {text && text[0]}
          {!text && 'Enable'}
        </OnOff>
        <OnOff
          active={!active}
          onClick={e => {
            this.playSoundEffect(false)
            onClick(setting, false)
          }}
        >
          {text && text[1]}
          {!text && 'Disable'}
        </OnOff>
      </StyledCheckbox>
    )
  }
}

const StyledCheckbox = styled.div`
  display: flex;
  background: #00482b;
`

const OnOff = styled.div`
  padding: 2px 5px;
  height: 50px;
  min-width: 60px;
  font-size: 28px;
  color: ${props =>
    props.active
      ? props.theme.settings.checkbox_font_color_active
      : props.theme.settings.checkbox_font_color};
  background: ${props =>
    props.active
      ? props.theme.settings.checkbox_background_active
      : props.theme.settings.checkbox_background};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: ${props => props.theme.query.small}) {
    font-size: 24px;
    min-width: 50px;
  }
`
