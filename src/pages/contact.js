import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import Seo from "../components/seo"
import GeneralButton from '../components/general-button'
import GeneralInput from '../components/general-input'
import GeneralTextarea from '../components/general-textarea'
import Hero from '../components/hero'

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      {/* 
  TODO:  Check if we need this SEO, guessing yes?  
      
      <Seo title="Contact" /> */}

      <Hero
        title="Get In Touch"
        body="Have a question? Send me a message and i'll get back to you as soon as can!"
        backgroundImage="https://images.prismic.io/devmind/4a17b94c-b2d9-4b78-9ba2-f25290368a41_nasa.jpg?auto=compress,format"
      />

      <div className="page-wrapper">
        <h1 style={{ textAlign: 'center' }}>Contact</h1>
        <div className="global-wrapper">
          <form
            name="Contact Form"
            method="POST"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="form-name" value="Contact Form" />

            <GeneralInput
              label="Email"
              type="email"
              name="email"
              required={true}
            />

            <GeneralTextarea label="Message" name="message" required={true} />

            <GeneralButton
              category="button-primary"
              text="Submit"
              type="submit"
              click={() => {}}
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
