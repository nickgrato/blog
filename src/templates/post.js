import React from "react"
import { graphql } from "gatsby"
import Gist from 'react-gist'

import Layout from "../components/layout"

const Post = ({ data, location }) => {
  if (!data) return null
  
  const post = data.prismicPost
  console.log('post',post)
  const image = post.data.image
  const imageSrc = image.url
  const imageAlt = image.alt

  return (
    
      
    <Layout>
      <div className="global-wrapper" > 
        <img src={imageSrc} alt={imageAlt}/>
        <h1>{post.data.title.text}</h1>
        {/* <script src="https://gist.github.com/nickgrato/.js"></script> */}


        {post.data.content_block.map((block,index) => {

          return (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: block.text_block.html }} />
              <Gist id={block.gist_id} />
            </div>
          )
     
        })}
        {/* <div dangerouslySetInnerHTML={{ __html: post.data.content.html }} /> */}
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
        content_block {
          gist_id
          text_block {
            html
          }
        }
      }
    }
  }
`