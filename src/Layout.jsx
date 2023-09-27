import React from 'react'
import {Header, Footer} from './components/Handle_Import_Export/HandleFile';
import { Outlet } from 'react-router-dom';
function Layout() {
    //Outlet is responsible for dynamic rendering means 
    //it only change middle part between header and footer 
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer /> 
    </>
  )
}

export default Layout