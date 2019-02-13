import React, { Component } from 'react'
import styled from 'styled-components'
import BlogPost from './BlogPost'
import { SettingsConsumer } from '../../context/SettingsContext'

class BlogContainer extends Component {
  //graphQL query for blog posts

  renderBlogPosts(activePost, onSelectPost) {
    const posts = [
      { id: 1, title: 'Hello World', content: 'Hello World and Lorem ipsum' },
      { id: 2, title: 'Hello Night', content: 'Hello World and Lorem ipsum' },
      { id: 3, title: 'Hello Pizza', content: 'Hello World and Lorem ipsum' },
    ]
    if (posts.length === 0) {
      return (
        <BlogPost
          active={true}
          placeholder
          post={0}
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
