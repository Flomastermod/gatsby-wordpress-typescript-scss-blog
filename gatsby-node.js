// gatsby-node.js

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slash = require(`slash`);

const createPaginatedPages = require('gatsby-paginate');

exports.createPages = async ({
  graphql,
  actions,
  reporter
}) => {
  
  const { createPage } = actions;
  
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx");

  const result = await graphql(`
  {
    allWordpressPost {
      edges {
        node {
          slug
          wordpress_id,
          title,
          excerpt,
          date
        }
      }
    }
  }`
  );
  if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
  }
  const BlogPosts = result.data.allWordpressPost.edges;

  BlogPosts.forEach((post, index) => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.wordpress_id,
        previous: index === 0 ? null : BlogPosts[index - 1].node,
        next: index === (BlogPosts.length - 1) ? null : BlogPosts[index + 1].node
      }
    });
  });

  createPaginatedPages({
    edges: BlogPosts,
    createPage: createPage,
    pageTemplate: "src/templates/BlogPosts.tsx",
    pageLength: 10,
    pathPrefix: "posts"
  })

  BlogPosts.forEach(edge => {
    createPage({
      path: `/posts/${edge.node.slug}/`,
      component: slash(BlogPostTemplate),
      context: {
        id: edge.node.id
      },
    });
  })
}