import React from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const EditTask = () => {
  return (
    <div>
       <div className='w-[80%] container mx-auto '>
      <div>
        <h1 className='text-4xl font-semibold py-10 flex items-center'>< RiArrowLeftSLine />  Edit Task </h1>
      </div>
     <div className='flex flex-col gap-16'>
     <div className='relative'>
        <label className='text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Task Title</label>
        <input className='w-full border border-gray-400 p-5 rounded-md px-8 ' type="text" placeholder= "E.g Project Defence, Assigniment... " />
      </div>
      <div className=' relative '>
        <label className=' text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Description</label>
        <input className=' w-full border border-gray-400 p-5 rounded-md px-8 pb-40' type="text" placeholder= "Briefly describe your task... " />
      </div>
      <div className=' relative'>
        <label className=' text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Tags</label>
        <div className='flex items-center justify-center'>
          <input className='w-full border border-gray-400 p-5 rounded-md px-8' type="text" placeholder= " Urgent  important "  /><IoIosArrowDown /></div>
      </div>
      </div>
      <div>
        <button className='bg-purple-800 text-white font-bold w-full my-10 p-5 rounded-md'>Done</button>
      </div>
      <div>
        <p className='text-purple-800 text-center justify-center underline'>back to top</p>
        
      </div>
     </div>
    </div>
    
  )
}

export default EditTask