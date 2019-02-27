import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NavContainer from './../components/navigation/NavContainer'
import ContentWrapper from './../components/content/ContentWrapper'
import ContentHeader from './../components/content/ContentHeader'
import ContentContainer from './../components/content/ContentContainer'
import BlogContainer from '../components/blog/BlogContainer'
const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <NavContainer active="blog" />
      <ContentWrapper>
        <ContentHeader headerText="blog" />
        <ContentContainer>
          <BlogContainer data={data} />
        </ContentContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    blog {
      getPosts {
        id
        title
        content
        createdAt
      }
    }
  }
`
