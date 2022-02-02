import * as React from "react"
import GeneralButton from "./general-button"
import { Link } from "gatsby"

const Hero = prop => {
  let Cta

  if (prop.ctaText) {
    Cta = (
      <Link to={prop.cta}>
        <GeneralButton
          category="button-primary"
          text={prop.ctaText}
          click={() => {}}
        />
      </Link>
    )
  }

  return (
    <div
      className="hero-wrapper"
      style={{ backgroundImage: `url(${prop.backgroundImage})` }}
    >
      <div className="hero-content-wrapper">
        <div className="hero-content-container">
          <div className="hero-content">
            <div className="hero-title">{prop.title}</div>
            <div className="hero-body">{prop.body}</div>
            <div className="hero-actions">{Cta}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
