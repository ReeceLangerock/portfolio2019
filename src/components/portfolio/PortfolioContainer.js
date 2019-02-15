import React, { Component } from 'react'
import styled from 'styled-components'
import PortfolioItem from './PortfolioItem'
import { SettingsConsumer } from '../../context/SettingsContext'
import portfolio from './portfolio'

class PortfolioContainer extends Component {
  //graphQL query for blog posts

  renderPortfolioItems(activeItem, onSelectItem) {
    const items = portfolio

    return items.map((item, index) => {
      return (
        <PortfolioItem
          item={item}
          active={activeItem === item.id}
          onSelectItem={onSelectItem}
          key={`portfolio-item-${item.id}`}
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
