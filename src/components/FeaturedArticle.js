import * as React from "react"
import * as styles from "./FeaturedArticle.module.scss"
import { Link } from "gatsby"
import GeneralButton from "./general-button"

const FeaturedArticle = ({ post }) => {
  const title = post.data.title.text
  const image = post.data.image
  const imageSrc = image.url
  const imageAlt = image.alt

  return (
    <Link to={"/" + post.uid} itemProp="url">
      <article
        className={styles.article}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className={styles.header}>
          <img src={imageSrc} alt={imageAlt} />

          <div className={styles.ctaWrapper}>
            <GeneralButton
              category="button-primary"
              text="Read More"
              click={() => {}}
            />
          </div>
        </header>
        <section className={styles.metaData}>
          <h2 className={styles.title}>
            <span itemProp="headline">{title}</span>
          </h2>
          <small>{post.data.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: post.data.excerpt.html,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </Link>
  )
}

export default FeaturedArticle
