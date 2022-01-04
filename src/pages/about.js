import * as React from "react"
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const aboutData = data.prismicAbout.data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Me" />
      <div className="page-wrapper">
        <h1 style={{textAlign:'center'}}>{aboutData.title.text}</h1>
        <div className="global-wrapper fancy-p">
          <RichText render={aboutData.content.richText}/>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
   
    prismicAbout {
      data {
        content {
          richText
        }
        title {
          text
        }
      }
    }

  }
`


