import React from 'react'
//component
import Header from './header'
import Footer from './footer'
interface Props{
    children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout


