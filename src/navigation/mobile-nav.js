import * as React from "react"
import {
  containerWrapper,
  container,
  closeButton,
  header,
  linksWrapper,
  navWrapper,
  navLink,
} from "./mobile-nav.module.scss"
import { Link } from "gatsby"
import ScrollLock from "react-scrolllock"
import { MdClose } from "@react-icons/all-files/md/MdClose"

const MobileNav = props => {
  return (
    <ScrollLock>
      <div className={containerWrapper}>
        <div className="flex-box">
          <div className={header}>
            <button
              className={closeButton}
              onClick={() => {
                props.closeMobileNav()
              }}
            >
              <MdClose></MdClose>
            </button>
          </div>

          <div className="flex-box">
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
        </div>
      </div>
    </ScrollLock>
  )
}

export default MobileNav
