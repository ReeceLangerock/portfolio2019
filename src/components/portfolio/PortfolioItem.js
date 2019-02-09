import React, { Component } from 'react'
import styled from 'styled-components'

class BlogItem extends Component {
  renderImages() {
    const { images } = this.props.item
    console.log(images)
    if (!images) {
      return null
    }
    return images.map(image => {
      return (
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
      )
    })
  }
  render() {
    const { active, item, onSelectItem } = this.props
    const technologies = item.tech.join(', ')

    if(item.fcc){
      item.synopsis = <span>{item.synopsis} <a href = {item.fcc} target = '_blank'>this</a></span>
    }

    return (
      <ItemContainer active={active}>
        <ItemTitle active={active} onClick={e => onSelectItem(item.id)}>
          {item.title}
          {active && <Toggle>X</Toggle>}
        </ItemTitle>
        <ItemContent active={active}>
          <p>
            <Label>SYNOPSIS: </Label>
            {item.synopsis}
          </p>
          <p>
            <Label>TECHNOLOGIES: </Label>
            {technologies}
          </p>

          <p>
            <Label>DATE COMPLETED: </Label>
            {item.date}
          </p>

          <Link href={item.siteLink} target = '_blank'>LINK TO SITE</Link>
          <br/>
          {(item.repoLink || !item.private) && (
            <Link href={item.repoLink} target = '_blank'>LINK TO REPO</Link>
          )}

          {item.private && (
            <p>
              This project is in a private repository. I am more than happy to
              share it upon request.
            </p>
          )}

          <Row>{this.renderImages()}</Row>
        </ItemContent>
      </ItemContainer>
    )
  }
}

export default BlogItem

const ItemContainer = styled.div`
  border: 1px solid white;
  font-size: 36px;
  background: ${props =>
    props.active ? 'hsla(154, 95%, 24%, 1)' : 'hsla(154, 95%, 24%, 0.5)'};
`
const ItemTitle = styled.div`
  border-bottom: ${props => (props.active ? '1px solid white' : 'none')};
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`
const ItemContent = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 10px;
  font-size: 28px;
  p {
    margin-bottom: 12px;
  }
  a {
    color: white;
    transition: 0.35s all;

  &:hover {
    text-decoration: underline;
    color: #21d077;
    transition: 0.35s all;
  }
  }
`

const Label = styled.span`
  font-size: 28px;
  margin-right: 4px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  flex-wrap: wrap;
  padding: 15px 8px 0 8px;
  align-items: center;
`

const ImageContainer = styled.div`
  display: block;

  img {
    max-height: 250px;
    color: #031603;
    box-shadow: 0 -4px #dbd8ff, 0 -8px, 4px 0 #dbd8ff, 4px -4px, 8px 0,
      0 4px #dbd8ff, 0 8px, -4px 0 #dbd8ff, -4px 4px, -8px 0, -4px -4px, 4px 4px;
    background: #dbd8ff;
    padding: 1px;
  }
`
const Toggle = styled.div``

const Link = styled.a`
  margin-bottom: 10px;
  font-size: 28px;
  text-decoration: none;
  color: white;
  transition: 0.35s all;

  &:hover {
    text-decoration: underline;
    color: #21d077;
    transition: 0.35s all;
  }
`
