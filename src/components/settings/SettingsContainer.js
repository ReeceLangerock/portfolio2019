import React, { Component } from 'react'
import styled from 'styled-components'
import Label from './Label'
import Checkbox from './Checkbox'

export default class SettingsContainer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Label>CRT Flicker:</Label>
          <Checkbox />
        </Row>
        <Row>
          <Label>Dark Mode:</Label>
          <Checkbox />
        </Row>
      
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  /* justify-content: space-between; */
  height: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
