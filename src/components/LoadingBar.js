import React, { Component } from 'react'
import styled from 'styled-components'
export default class LoadingBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percent: 0,
    }
    this.animateBar = this.animateBar.bind(this)
  }

  animateBar() {
    let interval = setInterval(() => {
      let percentAddition = Math.random() * 10
      this.setState({
        percent: this.state.percent + percentAddition,
      })
      if (this.state.percent >= 100) {
        console.log(this.props)
        this.props.onLoad()
        clearInterval(interval)
      }
    }, 150)
  }

  componentDidMount() {
    this.animateBar()
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
  height: 50px;
  border: 1px solid white;
`

const Progress = styled.div`
  width: ${props => props.width + '%'};
  background: green;
  height: 100%;
`
