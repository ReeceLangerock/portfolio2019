import React, { Component } from 'react'
import styled from 'styled-components'
import LoadingBar from './../LoadingBar'
import { SettingsConsumer } from './../../context/SettingsContext'
class LoadingScreen extends Component {
  render() {
    return (
      <SettingsConsumer>
        {value => {
          return (
            <Loading>
              <h1>Langerock Enterprises, Inc</h1>

              <LoadingBar onLoad={value.onLoad} />
            </Loading>
          )
        }}
      </SettingsConsumer>
    )
  }
}

export default LoadingScreen

const Loading = styled.div`
  h1 {
    font-family: 'Sevastopol';
    font-size: 94px;
    color: white;
  }
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
