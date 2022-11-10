import React from 'react'
import { graphql } from 'gatsby'
import Gist from 'react-gist'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Post = ({ data, pageContext }) => {
  if (!data) return null

  const post = data.prismicPost
  console.log('post', post)
  const image = post.data.image
  const imageSrc = image.url
  const imageAlt = image.alt

  const seoData = {
    image: post.data.image,
    path: pageContext.postPath,
    title: post.data.title.text,
    description: post.data.excerpt.text,
  }

  return (
    <Layout>
      <Seo post={seoData} />

      <div className="global-wrapper">
        <img src={imageSrc} alt={imageAlt} />
        <h1>{post.data.title.text}</h1>

        {post.data.content_block.map((block, index) => {
          return (
            <div key={index}>
              <div
                dangerouslySetInnerHTML={{ __html: block.text_block.html }}
              />
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
        excerpt {
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
