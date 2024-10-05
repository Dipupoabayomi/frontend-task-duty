import React from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useForm  } from 'react-hook-form'

const EditTask = () => {
  const {register, handleSubmit, reset, formState:{errors}} =useForm()
  const onSubmit =(data)=>{
    console.log(data);
    reset()
    
  }
  
  return (
<div className='w-[80%] container mx-auto '>
      <div>
        <h1 className='text-4xl font-semibold py-10 flex items-center'>< RiArrowLeftSLine /> New Task </h1>
      </div>
     <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-16'>
     <div className='relative' >
        <label className='text-gray-400 absolute z-10 left-8 -top-5 bg-white text-2xl '> Task Title</label>
        <input
        className='w-full border border-gray-400 p-5 rounded-md px-8 relative  '
         {...register("tasktitle",{
          required: " !Task Title is required"
        })} 
        type="text" placeholder= "E.g Project Defence, Assigniment... " />
      </div>
      {errors.tasktitle && <p className=' text-red-600'>{errors.tasktitle.message}</p>}
      <div className='relative'>
        <label className='text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Description</label>
        <input

        {...register("description",{
          required: "! Description is required"
        })}
        className='border border-gray-400 p-5 rounded-md px-8 relative pb-40 w-full' type="text" placeholder= "Briefly describe your task... " />
        
      </div>
      {errors.description && <p className=' text-red-600'>{errors.description.message} </p>}
      {/* <div className='relative'>
        <label className='text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Tags</label>
        <div className='flex items-center justify-between'>
          <input className='border border-gray-400 p-5 rounded-md px-8 relative w-full'
           {...register("tags",{
            required: " !Tags is required"
          })} 
        type="text" placeholder= " Urgent  important " /><IoIosArrowDown /></div>
      </div> */}
      <div className='relative'>
      <label className='text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Tags</label>
      <div className='flex items-center justify-between relative'>
        <select
          className='border border-gray-400 p-5 rounded-md px-8 relative w-full appearance-none'
          {...register("tags", {
            required: "!Tags is required"
          })}
        >
          <option value="">Select a tag</option>
          <option value="important">Important</option>
          <option value="urgent">Urgent</option>
        </select>
        <IoIosArrowDown className='absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none' />
      </div>
    </div>
      {errors.tags && <p className=' text-red-600'>{errors.tags.message} </p>}
      <button type='submit' className='bg-purple-800 text-white font-bold w-full my-10 p-5 rounded-md'>Done</button>
      </form>
      
       
      
      <div>
        <p className='text-purple-800 text-center justify-center underline'>back to top</p>
        
      </div>
     </div>
    
  )
}

export default EditTask