import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Post = ({ data, location }) => {
  if (!data) return null
  
  const post = data.prismicPost

  return (
    <Layout>
      <h1>{post.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.data.content.html }} />
    </Layout>
  )
}
export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`