import React, { Component } from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

export default class NavContainer extends Component {
  render() {
    const { active } = this.props
    return (
      <Container>
        <h1>Folders</h1>
        <NavItem active={active === ''} linkUrl="">
          About
        </NavItem>
        <NavItem active={active === 'blog'} linkUrl="blog">
          Blog
        </NavItem>
        <NavItem active={active === 'portfolio'} linkUrl="portfolio">
          Portfolio
        </NavItem>
        <NavItem active={active === 'contact'} linkUrl="contact">
          Contact
        </NavItem>
        <NavItem active={active === 'settings'} linkUrl="settings">
          Settings
        </NavItem>
        <NavItem active={active === 'files'} linkUrl="files">
          Files
        </NavItem>
      </Container>
    )
  }
}

const Container = styled.div`
  padding-top: 70px;
  width: 20%;
  height: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${props => props.theme.query.mobile}) {
    flex-direction: row;
    width: 100%;
    height: auto;
  }

  h1 {
    margin-bottom: 8px;
    color: ${props => props.theme.navigation.fontColor};
    text-align: left;
    align-self: flex-start;
    margin-left: 10%;
    font-family: 'Sevastopol';
    font-size: 30px;
    text-transform: uppercase;
    line-height: 1;
  }
`
