import React, { Component } from 'react'
import styled from 'styled-components'
import LoadingBar from './../LoadingBar'
class LoadingScreen extends Component {
  render() {
    const { onLoad, soundEffects } = this.props
    return (
      <Loading>
        <div />
        <h1>Langerock Enterprises, Inc</h1>

        <BarContainer>
          <LoadingBar onLoad={onLoad} soundEffects={soundEffects} />
          <p>Loading screen can be disabled in settings...</p>
        </BarContainer>
      </Loading>
    )
  }
}

export default LoadingScreen

const Loading = styled.div`
  h1 {
    font-family: 'Sevastopol';
    font-size: 128px;
    margin-bottom: 2rem;
    text-align: center;
    color: ${props => props.theme.loading_bar.title_font_color};

    @media (max-width: ${props => props.theme.query.tablet}) {
      font-size: 84px;
    }
    @media (max-width: ${props => props.theme.query.mobile}) {
      font-size: 72px;
    }
    @media (max-width: ${props => props.theme.query.small}) {
      font-size: 52px;
    }
  }

  p {
    font-family: 'Sevastopol';
    font-size: 28px;
    color: white;
    text-align: center;
    margin-top: 24px;
    color: ${props => props.theme.loading_bar.font_color};
    @media (max-width: ${props => props.theme.query.small}) {
      font-size: 22px;
    }
  }
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
