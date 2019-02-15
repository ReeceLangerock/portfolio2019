import React, { Component } from 'react'
import styled from 'styled-components'
export default class Checkbox extends Component {
  render() {
    const { active, onClick, setting, text } = this.props
    return (
      <StyledCheckbox>
        <OnOff active={active} onClick={e => onClick(setting, true)}>
          {text && text[0]}
          {!text && 'Enable'}
        </OnOff>
        <OnOff active={!active} onClick={e => onClick(setting, false)}>
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
