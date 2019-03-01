import React, { Component } from 'react'
import styled from 'styled-components'
import BlogPost from './BlogPost'
import { SettingsConsumer } from '../../context/SettingsContext'
import { graphql } from 'react-apollo'

class BlogContainer extends Component {
  //graphQL query for blog posts

  renderBlogPosts(activePost, onSelectPost) {
    const posts = this.props.data.blog.getPosts || []
    console.log(posts)
    if (posts && posts.length === 0) {
      return (
        <BlogPost
          placeholder
          active={activePost === 0}
          post={{ id: 0, title: 'Nothing to see here... yet!' }}
          onSelectPost={onSelectPost}
        />
      )
    }
    return posts.map(post => {
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
    console.log(this.props)

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
