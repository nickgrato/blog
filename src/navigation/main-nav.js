import * as React from "react"
import {
  containerWrapper,
  container,
  navWrapper,
  navLink,
  logo,
  menuButton,
  menuIcon,
} from "./main-nav.module.scss"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"
import MobileNav from "../navigation/mobile-nav"
import { useState } from "react"
import { MdMenu } from "@react-icons/all-files/md/MdMenu"
import { StaticImage } from "gatsby-plugin-image"

const NavMain = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <div className={containerWrapper}>
      <div className={container}>
        <Link className={logo} to="/">
          <StaticImage
            className="logo"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/grato_codes.png"
            width={110}
            quality={95}
            alt="Profile picture"
          />
        </Link>

        <button
          className={menuButton}
          onClick={() => {
            setShowMobileNav(!showMobileNav)
          }}
        >
          <MdMenu></MdMenu>
        </button>

        <ul className={navWrapper}>
          <li>
            <Link className={navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navLink} to="/about">
              About
            </Link>
          </li>
          {/* <li><Link className={navLink} to="/goals">Goals</Link></li> */}
          <li>
            <Link className={navLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <CSSTransition
        in={showMobileNav}
        timeout={300}
        classNames="mobile-nav"
        unmountOnExit
        onEnter={() => setShowMobileNav(true)}
        onExited={() => setShowMobileNav(false)}
      >
        <MobileNav
          closeMobileNav={setShowMobileNav.bind(this, false)}
        ></MobileNav>
      </CSSTransition>
    </div>
  )
}

export default NavMain
