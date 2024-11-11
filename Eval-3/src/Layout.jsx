import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Home/Navbar'
import ToTopArrow from './components/Home/ToTopArrow'

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <ToTopArrow />
    </>
  )
}

export default Layout