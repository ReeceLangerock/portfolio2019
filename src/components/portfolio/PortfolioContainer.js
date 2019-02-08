import React, { Component } from 'react'
import styled from 'styled-components'
import PortfolioItem from './PortfolioItem'
import { SettingsConsumer } from '../../context/SettingsContext'

class PortfolioContainer extends Component {
  //graphQL query for blog posts

  renderPortfolioItems(activeItem, onSelectItem) {
    const items = [
      {
        id: 1,
        title: 'Draw-Dash',
        synopsis:
          'Draw-Dash is a competitive, 1v1 drawing competition. Authenticated users are given a prompt for what to draw and a timer begins to countdown, and the 60 second Draw Dash begins!',
        tech: ['React', 'React-Redux', 'Express', 'Socket.io', 'MongoDB'],
        repoLink: 'https://github.com/ReeceLangerock/draw-dash',
        siteLink: 'https://draw-dash.herokuapp.com/',
      },
      {
        id: 17,
        title: 'test2',
        synopsis: 'sdjfndsfjn',
        tech: ['React'],
      },
    ]

    return items.map((item, index) => {
      return (
        <PortfolioItem
          item={item}
          active={activeItem === item.id}
          onSelectItem={onSelectItem}
        />
      )
    })
  }

  render() {
    return (
      <SettingsConsumer>
        {({ portfolio, onSelectItem }) => {
          return (
            <Container>
              {this.renderPortfolioItems(portfolio.activeItem, onSelectItem)}
            </Container>
          )
        }}
      </SettingsConsumer>
    )
  }
}

export default PortfolioContainer

const Container = styled.div``
