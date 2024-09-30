import React from 'react'
import navimg from '../assets/images/Group 2.svg'
import navprofile from '../assets/images/Group 7.png'



const Navbar = () => {
  return (
    <div className='w-[80%] mx-auto container p-5'>
      <div className='flex items-center justify-between'>
      <span className='h-25 w-24'><img src={navimg} alt="" /></span>
      <div className='flex items-center justify-between font-medium gap-12 '>
        <button> New Task </button>
        <button> All Task </button> 
        <span className='w-10'><img src={navprofile} alt="" /></span>
      </div>
      
      </div>
    </div>
  )
}

export default Navbar