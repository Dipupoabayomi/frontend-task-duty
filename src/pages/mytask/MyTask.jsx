
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import { useEffect, useState } from 'react';

const MyTask = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const [allTask, setAllTAsk] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchAllTask = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${baseUrl}/api/v1/task`)
    console.log(res);
    if(res.status === 201){
      setAllTAsk(res.data)
    }
    } catch (error) {
     console.log(error);
    }finally{
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    fetchAllTask()
  },[])




  return (
    <div className='w-[80%] container mx-auto '>
      <div className='flex flex-row py-10 justify-between items-center font-semibold'>
      <div>
        <h1 className='text-4xl '>My Tasks</h1>
      </div>
      <div>
       <Link to="/newtask" className='text-purple-800'> + Add New Task</Link>
      </div>
      </div>
      <div className='flex flex-col gap-10'>
      <div className='border border-gray-400 rounded-md p-4'>
       <div className='flex flex-row justify-between items-center font-semibold py-5 border-b-gray-400 border-b'>
       <div>
          <span className='text-rose-300'> Urgent</span>
        </div>
        <div className='flex flex-row gap-5'>
          <Link to={`edittask/`}  className='bg-purple-800 text-white py-2 px-6 rounded-md flex items-center gap-2'>     <FiEdit /> Edit</Link>
          <button className='text-purple-800 border-purple-800 border py-2 px-6 rounded-md  flex items-center gap-2'>  <RiDeleteBinLine /> Delete</button>
        </div>
       </div>

        <div className=''>
          <h1 className='text-4xl pt-3 pb-3'>FinTech Website Update</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatibus facere? Similique, modi quos! Velit nisi eveniet neque dolorum tenetur recusandae cupiditate corrupti unde qui temporibus nam at molestiae, voluptatum blanditiis asperiores quisquam officia minus ullam eius architecto magni ipsa.</p>
        </div>
      </div>
      <div className='border border-gray-400 rounded-md p-4 '>
       <div className='flex flex-row justify-between items-center font-semibold py-5 border-b-gray-400 border-b'>
       <div>
          <span className='text-green-600'> important</span>
        </div>
        <div className='flex flex-row gap-5'>
          <button className='bg-purple-800 text-white py-2 px-6 rounded-md flex items-center gap-2'>     <FiEdit /> Edit</button>
          <button className='text-purple-800 border-purple-800 border py-2 px-6 rounded-md  flex items-center gap-2'>  <RiDeleteBinLine /> Delete</button>
        </div>
       </div>

        <div className=''>
          <h1 className='text-4xl pt-3 pb-3'>Agro Website Update</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatibus facere? Similique, modi quos! Velit nisi eveniet neque dolorum tenetur recusandae cupiditate corrupti unde qui temporibus nam at molestiae, voluptatum blanditiis asperiores quisquam officia minus ullam eius architecto magni ipsa.</p>
        </div>
      </div>
      <div className='border border-gray-400 rounded-md p-4'>
       <div className='flex flex-row justify-between items-center font-semibold py-5 border-b-gray-400 border-b'>
       <div>
          <span className='text-rose-300'> Urgent</span>
        </div>
        <div className='flex flex-row gap-5'>
          <button className='bg-purple-800 text-white py-2 px-6 rounded-md flex items-center gap-2'>     <FiEdit /> Edit</button>
          <button className='text-purple-800 border-purple-800 border py-2 px-6 rounded-md  flex items-center gap-2'>  <RiDeleteBinLine /> Delete</button>
        </div>
       </div>

        <div className=''>
          <h1 className='text-4xl pt-3 pb-3'>FinTech Website Update</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatibus facere? Similique, modi quos! Velit nisi eveniet neque dolorum tenetur recusandae cupiditate corrupti unde qui temporibus nam at molestiae, voluptatum blanditiis asperiores quisquam officia minus ullam eius architecto magni ipsa.</p>
        </div>
      </div>
      <div className='border border-gray-400 rounded-md p-4'>
       <div className='flex flex-row justify-between items-center font-semibold py-5 border-b-gray-400 border-b'>
       <div>
          <span className='text-green-600'> important</span>
        </div>
        <div className='flex flex-row gap-5'>
          <button className='bg-purple-800 text-white py-2 px-6 rounded-md flex items-center gap-2'>     <FiEdit /> Edit</button>
          <button className='text-purple-800 border-purple-800 border py-2 px-6 rounded-md  flex items-center gap-2'>  <RiDeleteBinLine /> Delete</button>
        </div>
       </div>

        <div className=''>
          <h1 className='text-4xl pt-3 pb-3'>Agro Website Update</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatibus facere? Similique, modi quos! Velit nisi eveniet neque dolorum tenetur recusandae cupiditate corrupti unde qui temporibus nam at molestiae, voluptatum blanditiis asperiores quisquam officia minus ullam eius architecto magni ipsa.</p>
        </div>
      </div>
      </div>
      <div className='py-6'>
        <p className='text-purple-800 text-center justify-center underline'>back to top</p>
        
      </div>
    </div>
  )
}

export default MyTask