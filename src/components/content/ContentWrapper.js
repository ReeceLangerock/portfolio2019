import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContentHeader from './ContentHeader'
import ContentContainer from './ContentContainer'

export default class ContentWrapper extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return <Container>{this.props.children}</Container>
  }
}

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  p{

    font-size: 1.3rem;
  }
`
