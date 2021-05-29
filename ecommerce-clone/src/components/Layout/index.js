import React from 'react'
import Header from '../../components/Header'
import MenuHeader from '../../components/MenuHeader'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
      <Header/>
        <MenuHeader/>
        {props.children}
    </>
   )

 }

export default Layout