import React, { Component } from 'react'
import styled from 'styled-components'
import startupSound from './../../static/startup.wav'
export default class LoadingBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percent: 0,
    }
    this.animateBar = this.animateBar.bind(this)
    this.playSoundEffect = this.playSoundEffect.bind(this)
  }

  animateBar() {

    let interval = setInterval(() => {
      let percentAddition = Math.random() * 15
      this.setState({
        percent: this.state.percent + percentAddition,
      })
      if (this.state.percent >= 100) {
        let innerInterval = setInterval(() => {
          this.props.onLoad()
          clearInterval(interval)
          clearInterval(innerInterval)
        }, 400)
      }
    }, 150)
  }

  componentDidMount() {
    this.playSoundEffect()
    this.animateBar()
  }

  playSoundEffect() {
    if (this.props.soundEffects) {
      const audio = new Audio(startupSound)
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
    let percent = this.state.percent > 100 ? 100 : this.state.percent
    return (
      <Bar>
        <Progress width={percent} />
      </Bar>
    )
  }
}

const Bar = styled.div`
  width: 95%;
  height: 30px;
  border: 1px solid ${props => props.theme.loading_bar.border};
`

const Progress = styled.div`
  width: ${props => props.width + '%'};
  height: 100%;
  background: ${props => props.theme.loading_bar.background};
`
