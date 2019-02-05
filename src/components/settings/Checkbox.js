import React, { Component } from 'react'
import styled from 'styled-components'
export default class Checkbox extends Component {
  render() {
const {active, onClick, setting} = this.props
    return (
      <StyledCheckbox>
        <OnOff active = {active} onClick = {(e) => onClick(setting, true)}>Enable</OnOff>
        <OnOff active = {!active} onClick = {(e) => onClick(setting, false)}>Disable</OnOff>
      </StyledCheckbox>
     
    )
  }
}

const StyledCheckbox = styled.div`
  display: flex;
  background: #00482b;
`

const OnOff = styled.div`
  padding: 2px 3px;
  height: 50px;
  width: 50px;
  color: ${props => (props.active ? '#00482b' : '#00b757')};
  background: ${props => (props.active ? '#00b757' : '#00482b')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* :hover {
    background: #00b757;
    color: #00482b;
  } */
`
