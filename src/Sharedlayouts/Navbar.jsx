import React from 'react'
import { Link } from 'react-router-dom'
import navimg from '../assets/images/Group 2.svg'
import navprofile from '../assets/images/Group 7.png'



const Navbar = () => {
  return (
    <div className='w-[80%] mx-auto container py-5'>
      <div className='flex items-center justify-between'>
      <Link to="/"><span className='h-25 w-24'><img src={navimg} alt="" /></span></Link>
      <div className='flex gap-3'>
      <div className=' hidden lg:flex items-center justify-between font-medium gap-12 '>
        <Link to="/newtask">New Task</Link>
        <Link to="/mytask">All Task </Link>
      </div>
      
        <span className='w-10'><img src={navprofile} alt="" /></span>
      </div>
      </div>
    </div>
  )
}

export default Navbar