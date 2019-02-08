import React, { Component } from 'react'
import styled from 'styled-components'

class BlogItem extends Component {
  renderTech() {}
  render() {
    const { active, item, onSelectItem } = this.props
    const technologies = item.tech.join(', ')
    return (
      <ItemContainer active={active}>
        <ItemTitle active={active} onClick={e => onSelectItem(item.id)}>
          {item.title}
          {active && <Toggle>X</Toggle>}
        </ItemTitle>
        <ItemContent active={active}>
          <p>SYNOPSIS: {item.synopsis}</p>
          <p>TECHNOLOGIES: {technologies}</p>

          <Link href={item.repoLink}>LINK TO REPO</Link>

          <Link href={item.siteLink}>LINK TO SITE</Link>

          <Row>
            <img src="https://reecelangerock.ml/static/media/Draw-Dash-Preview.24c2f723.png" />
            <img src="https://reecelangerock.ml/static/media/Draw-Dash.f3ed75ba.png" />
          </Row>
        </ItemContent>
      </ItemContainer>
    )
  }
}

export default BlogItem

const ItemContainer = styled.div`
  border: 1px solid white;
  font-size: 32px;
  background: ${props =>
    props.active ? 'hsla(154, 95%, 24%, 1)' : 'hsla(154, 95%, 24%, 0.5)'};
`
const ItemTitle = styled.div`
  border-bottom: ${props => (props.active ? '1px solid white' : 'none')};
  padding: 6px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`
const ItemContent = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 10px;
  font-size: 28px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
  align-items: center;

  img {
    max-height: 400px;
    border: 3px solid #020701;
    border-radius: 0.5em;
    padding: 3px;
    background: #041704;
  }
`
const Toggle = styled.div``

const Link = styled.a`
  display: block;
  margin-bottom: 10px;
  font-size: 32px;
  text-decoration: none;
  color: white;
  transition: 0.35s all;

  &:hover {
    text-decoration: underline;
    color: #21d077;
    transition: 0.35s all;
  }
`
