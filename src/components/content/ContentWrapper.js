import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContentHeader from './ContentHeader';
import ContentContainer from './ContentContainer';

export default class ContentWrapper extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Container>
          <ContentHeader/>
          <ContentContainer/>
      </Container>
    )
  }
}


const Container = styled.div`
height: 100%;
width: 75%;
display: flex;
flex-direction: column;
justify-content: space-between;
`