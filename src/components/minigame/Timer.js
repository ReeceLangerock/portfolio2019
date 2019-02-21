import React, { Component } from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
export default class Timer extends Component {
  componentDidMount() {
    const { timerActive, runTimer } = this.props.context

    if (timerActive) {
      runTimer()
    }
  }

  render() {
    const { time } = this.props.context
    return (
      <Container>
        <Moment format="ss.SS">{time}</Moment>
      </Container>
    )
  }
}

const Container = styled.div`
  font-size: 72px;
  letter-spacing: 15px;
  margin-bottom: 20px;
  width: 100%;
  @media (max-height: 800px) {
    font-size: 64px;
    margin-bottom: 10px;
  }
`
