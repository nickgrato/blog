import * as React from "react"
import * as styles from './footer.module.scss'
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub"
import { VscTwitter } from "@react-icons/all-files/vsc/VscTwitter"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import { Link } from "gatsby"

const Footer = prop => {
  return (
    <footer className={styles.footer_wrapper}>


      {/* MAIN FOOTER  */}
      <div className={styles.footer_container}>

        <div className={styles.footer_branding_container}>
          <Link to="/" >
            <StaticImage
              className="branding"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/grato_globe.png"
              width={130}
              quality={95}
              alt="Footer Branding"
            />
          </Link>
        </div>

        <div className={styles.footer_navigation_container}>
          <div className={styles.footer_icon_container}>
            <a href="https://github.com/nickgrato" target="_blank"><VscGithub/></a>
            <a href="https://twitter.com/NickGrato" target="_blank"><VscTwitter/></a>
            <a href="https://www.linkedin.com/in/nick-grato-94598793/" target="_blank"><AiFillLinkedin/></a>
          </div>
        </div>

      </div>

      
    
      {/* FOOTER FOOTER  */}
      <div className={styles.footer_footer}>
        <div className={styles.footer_footer_content}>
          <div> 
            Built By Me: Dev Stack {` `}
            <a href="https://reactjs.org/" className="lite" target="_blank">ReactJs</a>{` `}
            <a href="https://www.gatsbyjs.com" className="lite" target="_blank">Gatsby</a> {` `}
            <a href="https://prismic.io" className="lite" target="_blank">Pismic</a> {` `}
            <a href="https://www.netlify.com/" className="lite" target="_blank">Netlify</a> 
          </div>
          <div className={styles.footer_footer_divider}>|</div>
          <div>Grato Codes © {new Date().getFullYear()}</div> 
        </div>
      </div>
      

    </footer>
  )
}

export default Footer
