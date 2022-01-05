import * as React from "react"
import NavMain from '../navigation/main-nav'
import Footer from '../components/footer'
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {

  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div>
     

      <NavMain></NavMain>
      
      {/* data-is-root-path={isRootPath} */}
      <div>
        {/* <header className="global-header">{header}</header> */}
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
   
  )
}

export default Layout
