import React, { Component } from 'react'
import styled from 'styled-components'

class BlogItem extends Component {
  renderImages() {
    const { images, imageAltTexts, id } = this.props.item
    if (!images) {
      return null
    }
    return images.map((image, index) => {
      return (
        <ImageContainer key={`item${id}-img${index}`}>
          <img src={image} alt={imageAltTexts[index]} />
        </ImageContainer>
      )
    })
  }
  render() {
    const { active, item, onSelectItem } = this.props
    const technologies = item.tech.join(', ')

    if (item.fcc) {
      item.synopsis = (
        <span>
          {item.synopsis}{' '}
          <StyledLink size={'normal'} href={item.fcc} target="_blank">
            this
          </StyledLink>
        </span>
      )
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

          <StyledLink href={item.siteLink} target="_blank">
            LINK TO SITE
          </StyledLink>
          <br />
          {(item.repoLink || !item.private) && (
            <StyledLink href={item.repoLink} target="_blank">
              LINK TO REPO
            </StyledLink>
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
  border: 1px solid ${props => props.theme.content_item.border};
  font-size: 36px;
  background: ${props =>
    props.active
      ? props.theme.content_item.background_active
      : props.theme.content_item.background};
  :not(:last-child) {
    border-bottom: none;
  }
`
const ItemTitle = styled.div`
  border-bottom: ${props =>
    props.active ? '1px solid ' + props.theme.content_item.border : 'none'};
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.25s ease-in-out all;

  :hover {
    background: ${props => props.theme.content_item.background_active};
    transition: 0.25s ease-in-out all;
  }
`
const ItemContent = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.p};

  p {
    margin-bottom: 12px;
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
    ${props => props.theme.content_item.image_frame};
    max-height: 250px;
    padding: 1px;
  }

  @media (max-width: 1100px) {
    img {
      max-height: 200px;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 900px) {
    img {
      max-height: 170px;
    }
  }
  @media (max-width: ${props => props.theme.query.mobile}) {
    img {
      max-height: 200px;
    }
  }
`
const Toggle = styled.div``

const StyledLink = styled.a`
  margin-bottom: 10px;
  font-size: ${props => (props.normal ? '1.4rem' : '28px')};
  text-decoration: none;
  color: ${props => props.theme.content_item.link_color};

  transition: 0.35s ease-in-out all;

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.content_item.link_hovered};

    transition: 0.35s ease-in-out all;
  }
`
