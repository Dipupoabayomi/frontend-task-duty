import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from 'react-hook-form'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const {register, handleSubmit, reset, formState:{errors}} = useForm()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const baseUrl = import.meta.env.VITE_BASE_URL
  // const newUrl = `${baseUrl}/task` 

  const navigate = useNavigate()

  const onSubmit = async (data) => {
  

    try {
      console.log(data);
      
      setLoading(true)
      setError(null)
      const res = await axios.post(`${baseUrl}/api/v1/task`, {
        taskTitle: data.taskTitle,
        description: data.description,
        tags: data.tags
      });
      console.log(res);
      if(res.status === 201 ){
        reset()
        navigate("/mytask")
      }

    } catch (error) {
      console.error(error)
      setError("Something went wrong")
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className='w-[80%] container mx-auto '>
      <div>
        <h1 className='text-4xl font-semibold py-10 flex items-center'>< RiArrowLeftSLine /> New Task </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10'>
        <div className='relative' >
          <label className='text-gray-400 absolute z-10 left-8 -top-5 bg-white text-2xl border-t  border-red'> Task Title</label>
          <input
            className='w-full border border-gray-400 p-5 rounded-md px-8 relative  '
            {...register("taskTitle", {
              required: "Task Title is required"
            })} 
            type="text" placeholder="E.g Project Defence, Assigniment... " />
        </div>
        {errors.taskTitle && <p className=' text-red-600 font-semibold'>{errors.taskTitle.message}</p>}
        <div className='relative'>
          <label className='text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Description</label>
          <textarea  
            {...register("description", {
              required: "Description is required"
            })}
            className='border border-gray-400 p-5 rounded-md px-8 relative pb-40 w-full' 
            type="text" 
            placeholder="Briefly describe your task... " />
        </div>
        {errors.description && <p className=' text-red-600 font-semibold'>{errors.description.message} </p>}
        <div className='relative'>
          <label className='text-gray-400 absolute z-10 left-8 -top-4 bg-white text-2xl'>Tags</label>
          <div className='flex items-center justify-between relative'>
            <select
              className='border border-gray-400 p-5 rounded-md  px-8 relative w-full appearance-none '
              {...register("tags", {
                required: "Tags is required"
              })}
            >
              <option value="">Select a tag</option>
              <option value="Important">Important</option>
              <option value="Urgent">Urgent</option>
            </select>
            <IoIosArrowDown className='absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none' />
          </div>
        </div>
        {errors.tags && <p className=' text-red-600 font-semibold'>{errors.tags.message} </p>}
        <button type='submit' className='bg-purple-800 text-white font-bold w-full my-10 p-5 rounded-md' disabled={loading}>
          {loading ? "Submitting..." : "Done"}
        </button>
      </form>
      {error && <p className='text-red-600 font-semibold'>{error}</p>}
      
      <div className="flex justify-center items-center pb-8">
        <button className='text-purple-800 text-center underline'>back to top</button>
      </div>
    </div>
  )
}

export default NewTask