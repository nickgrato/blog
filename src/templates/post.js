import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Post = ({ data, location }) => {
  if (!data) return null
  
  const post = data.prismicPost
  const image = post.data.image
  const imageSrc = image.url
  const imageAlt = image.alt

  return (
    
      
    <Layout>
      <div className="global-wrapper" > 
        <img src={imageSrc} alt={imageAlt}/>
        <h1>{post.data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.data.content.html }} />
      </div>
    </Layout>
  )
}
export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        image {
          alt
          url
        }
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