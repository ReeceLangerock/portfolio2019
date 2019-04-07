import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import SEO from '../seo'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import NavContainer from './../navigation/NavContainer'
import ContentWrapper from './../content/ContentWrapper'
import ContentHeader from './../content/ContentHeader'
import ContentContainer from './../content/ContentContainer'
export default class IndividualPost extends Component {
  renderTags() {
    const { tags } = this.props.pageContext
    if (tags) {
      return tags.map(tag => {
        return <Tag key={tag.title}>{tag.title}</Tag>
      })
    }
  }
  render() {
    const post = this.props.pageContext
    return (
      <Layout noLoading>
        <SEO title={post.slug} />
        <NavContainer active="post" />
        <ContentWrapper>
          <ContentHeader headerText={post.title} />
          <ContentContainer>
            <PostContainer>
              <StyledMoment format="MMMM Do, YYYY">
                {new Date(post.createdAt)}
              </StyledMoment>

              <Tags>{this.renderTags()}</Tags>

              <PostContent>
                <ReactMarkdown source={post.content} escapeHtml={false} />
              </PostContent>
            </PostContainer>
          </ContentContainer>
        </ContentWrapper>
      </Layout>
    )
  }
}

const PostContainer = styled.div`
  border: 1px solid white;
  font-size: 32px;
  background: ${props => props.theme.content_item.background_active};
`

const PostContent = styled.div`
  padding: 0 10px 10px 10px;
  font-size: ${props => props.theme.fontSizes.p};
`

const StyledMoment = styled(Moment)`
  padding: 6px 12px;
  display: block;
`

const Tags = styled.div`
  display: flex;
  padding: 6px 10px 0 6px;
  flex-wrap: wrap;
`

const Tag = styled.div`
  background: ${props => props.theme.content_item.tag_background};
  color: ${props => props.theme.content_item.tag_color};
  border: 2px solid ${props => props.theme.content_item.tag_border};
  box-shadow: inset 0 0 0 2px
    ${props => props.theme.content_item.tag_border_inset};
  line-height: 1;
  padding: 2px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
`
