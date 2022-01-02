import * as React from "react"
import NavMain from '../navigation/main-nav'
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
        {/* <footer>
          © {new Date().getFullYear()}, Built By Me: Stack {` `} 
          <a href="https://www.gatsbyjs.com" target="_blank">Gatsby</a>, {` `}
          <a href="https://www.netlify.com/" target="_blank">Netlify</a>, {` `}
          <a href="https://reactjs.org/" target="_blank">ReactJs</a>,
        </footer> */}
      </div>
    </div>
   
  )
}

export default Layout
