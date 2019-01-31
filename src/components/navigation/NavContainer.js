import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavItem from './NavItem'

export default class NavContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <Container>
        <h1>Folders</h1>
        <NavItem active>About</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Shut Down</NavItem>
      </Container>
    )
  }
}

const Container = styled.div`
  padding-top: 100px;
  width: 20%;
  height: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    margin-bottom: 8px;
    color: #21d077;
    text-align: left;
    align-self: flex-start;
    margin-left: 10%;
    font-family: 'Sevastopol';
    font-size: 30px;
    text-transform: uppercase;
    line-height: 1;
  }
`
