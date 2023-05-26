import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Loader from 'components/Loader/Loader';
import s from './Header.module.css'

const Header = () => {
  return (
    <div >
      <div className={s.header_container}>
      <NavLink to = '/' className={s.navlink}>
        HOME
        </NavLink> 
        <NavLink to = '/movies' className={s.navlink}>
        MOVIES
        </NavLink> 
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
        </div>
    </div>
  )
}

export default Header
