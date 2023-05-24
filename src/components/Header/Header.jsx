import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to = '/'>
        HOME
        </NavLink> 
        <NavLink to = '/movies'>
        MOVIES
        </NavLink> 
        <Outlet />
    </div>
  )
}

export default Header
