import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export default class ContentWrapper extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Container>
    
        
        content
      </Container>
    )
  }
}


const Container = styled.div`
border: 1px solid #05b96b;
border-top: 30px solid #00ff7a;
width: 100%;
flex: 1;
font-family: "Sevastopol"

`