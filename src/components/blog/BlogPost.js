import React, { Component } from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

class BlogPost extends Component {
  render() {
    const { active, post, onSelectPost, placeholder } = this.props
    if (post.hidden && !window.showPost) {
      return null
    }
    console.log(post)
    return (
      <PostContainer active={active}>
        <PostTitle active={active} onClick={e => onSelectPost(post.id)}>
          {post.title}
          {active && <Toggle>X</Toggle>}
          {!active && post.createdAt && (
            <Moment format="MMMM Do, YYYY">{new Date(post.createdAt)}</Moment>
          )}
        </PostTitle>
        <PostContent active={active}>
          {placeholder && (
            <div>No posts have been written yet. Please check back later!</div>
          )}
          {!placeholder && (
            <ReactMarkdown source={post.content} escapeHtml={false} />
          )}

          <a href={`/post/${post.slug}`}>Share this post!!</a>
        </PostContent>
      </PostContainer>
    )
  }
}

export default BlogPost

const PostContainer = styled.div`
  border: 1px solid white;
  font-size: 32px;
  background: ${props =>
    props.active
      ? props.theme.content_item.background_active
      : props.theme.content_item.background};
  :not(:last-child) {
    border-bottom: none;
  }

  a {
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
  }
`

const PostTitle = styled.div`
  border-bottom: ${props =>
    props.active ? '1px solid ' + props.theme.content_item.border : 'none'};
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.25s ease-in-out all;

  :hover {
    background: ${props => props.theme.content_item.background_active};
    transition: 0.25s ease-in-out all;
  }
`
const PostContent = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.p};
`
const Toggle = styled.div``
