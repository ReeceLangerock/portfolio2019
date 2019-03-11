const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/components/blog/IndividualPost.js`)

    graphql(`
      {
        blog {
          posts {
              id
              title
              slug
              content
              createdAt
              tags {
                  title
              }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.blog.posts.map((node ) => {
        createPage({
          path: `/post/${node.slug}`,
          component: slash(postTemplate),
          context: {
            slug: node.slug,
            title: node.title,
            content: node.content,
            createdAt: node.createdAt,
            tags: node.tags
          }
        })
      })
      resolve()
    })
  })
}