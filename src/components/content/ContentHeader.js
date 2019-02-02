import React, { Component, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavConsumer } from './../../context/NavContext.js'

export default class ContentHeader extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   }

  render() {
    return (
      <NavConsumer>
        {value => {
          return <Container>{this.props.headerText}</Container>
        }}
      </NavConsumer>
    )
  }
}

const Container = styled.div`
  color: #bcf5e4;
  width: 100%;
  border: 1px solid #458695;
  box-shadow: inset 0 0 0 1px #b7d2a0;
  text-transform: uppercase;
  font-size: 24px;
  border-radius: 1px;
  padding: 10px;
  margin: 15px 0;
  background: #037744;
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
`
