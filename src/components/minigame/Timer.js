import React, { Component } from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
export default class Timer extends Component {
  

    componentDidMount(){
        const {time, timerActive, runTimer} = this.props.context
        console.log(this.props.context)

        if(timerActive)
        {
            runTimer()
        }
    }



  render() {
      const {time} = this.props.context
    return (
      <Container>
        <Moment format="ss.SS">{time}</Moment>
      </Container>
    )
  }
}

const Container = styled.div`
  font-size: 64px;
  letter-spacing: 10px;
  margin-bottom: 7px;
  width: 100%;
`
