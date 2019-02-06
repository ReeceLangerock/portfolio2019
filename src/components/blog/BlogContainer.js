import React, { Component } from 'react'
import styled from 'styled-components'
import BlogPost from './BlogPost'
import { SettingsConsumer } from '../../context/SettingsContext'

class BlogContainer extends Component {
  //graphQL query for blog posts

  renderBlogPosts(activePost, onSelectPost) {
    const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(activePost)
    return posts.map((post, index) => {
      return (
        <BlogPost
          post={post}
          active={activePost === post}
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
