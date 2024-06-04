import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Sidebar/>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout