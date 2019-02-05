import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class ContentWrapper extends Component {


  render() {
    return <Container>{this.props.children}</Container>
  }
}

const Container = styled.div`
  border: 1px solid #05b96b;
  border-top: 30px solid #00ff7a;
  width: 100%;
  flex: 1;
  color: white;
  padding: 20px;
  font-family: 'Sevastopol';
  font-size: 20px;
  position: relative;

  p,h1,h2,h3{
  font-family: 'Sevastopol';

  }
`
