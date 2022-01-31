import * as React from "react"
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      {/* <Seo title="About Me" /> */}
      <p>Thanks! I'll get back to you as soon as I can!</p>
      <p>Have a great day,</p>
      <p>- Nick</p>
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
  }
`


