import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class NavItem extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    const { active } = this.props

    if (active) {
      return (
        <ActiveContainer active={active}>
          <Border />
          <Content>{this.props.children}</Content>
          <Border />
        </ActiveContainer>
      )
    } else {
      return <Container active={active}>{this.props.children}</Container>
    }
  }
}

const Container = styled.div`
  border: 1px solid #129542;
  box-shadow: inset 0 0 0 1px #07661e;
  border-radius: 1px;
  padding: 10px;
  flex-grow: 1;
  margin-bottom: 6px;
  width: 80%;
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ActiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #dbd9ff;
  box-shadow: inset 0 0 0 1px #92a19f;
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: 6px;
  width: 100%;
`

const Border = styled.div`
  width: 8%;
  background: #dbd9ff;
`

const Content = styled.div`
  padding: 10px;
  font-family: 'Sevastopol';
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
  display: flex;
  align-items: center;
`
