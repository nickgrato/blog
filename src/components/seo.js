/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = (props) => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author{
              name
            }
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const defaults = data.site.siteMetadata;
  const title = props.post.title || defaults.title;
  const description = props.post.description || defaults.description;
  const url = new URL(props.post.path || '', defaults.siteUrl);
  const image = props.post.image ? props.post.image.url : false;
  const twitterAuthor = defaults.social.twitter

  return (
    <Helmet
      titleTemplate={title}>

        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        {image && <meta name="image" content={image} />}

        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterAuthor} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}

    </Helmet>
  )
}


export default Seo
