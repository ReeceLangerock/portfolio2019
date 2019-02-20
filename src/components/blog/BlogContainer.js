import React, { Component } from 'react'
import styled from 'styled-components'
import BlogPost from './BlogPost'
import { SettingsConsumer } from '../../context/SettingsContext'

class BlogContainer extends Component {
  //graphQL query for blog posts

  renderBlogPosts(activePost, onSelectPost) {
    const posts = []
    if (posts.length === 0) {
      return (
        <BlogPost
          placeholder
          active={activePost === 0}
          post={{id:0,title: 'Nothing to see here!'}}
          onSelectPost={onSelectPost}
        />
      )
    }
    return posts.map((post, index) => {
      return (
        <BlogPost
          post={post}
          active={activePost === post.id}
          onSelectPost={onSelectPost}
        />
      )
    })
  }

  render() {
    return (
      <SettingsConsumer>
        {({ blog, onSelectPost }) => {
          return (
            <Container>
              {this.renderBlogPosts(blog.activePost, onSelectPost)}
            </Container>
          )
        }}
      </SettingsConsumer>
    )
  }
}

export default BlogContainer

const Container = styled.div``
