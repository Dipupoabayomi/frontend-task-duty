import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Sharedlayouts/Navbar'


const Rootlayouts = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Rootlayouts