import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import FeaturedArticle from '../components/FeaturedArticle'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
  const posts = data.allPrismicPost.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title="All posts" />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} title={siteTitle}>
      {/* <Seo title="All posts" /> */}

      <Hero
        title="Welcome"
        body="Look around and hit the contact button if you have any questions"
        ctaText="Contact Me"
        cta="/contact"
        backgroundImage="https://images.prismic.io/devmind/4a17b94c-b2d9-4b78-9ba2-f25290368a41_nasa.jpg?auto=compress,format"
      />

      <div className="global-wrapper">
        <Bio />
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            

            return (
              <li key={post.uid}>
               <FeaturedArticle 
                post={post}
               />
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }

    allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
        data {
          date
          title {
            text
          }
          image {
            alt
            url
          }
          excerpt {
            html
          }
        }
        uid
      }
    }
  }
`
