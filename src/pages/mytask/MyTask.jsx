
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
      if(res.status === 200){
        setAllTAsk(res.data.task)
      }
      
    } catch (error) {
      console.error(error);
      
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchAllTask()
  },[])

  
  if(loading){
    return(
      <div className=" flex justify-center items-center h-screen text-center ">
        
<div className="w-full gap-x-2 flex justify-center items-center">
  <div
    className="w-5 bg-[#d991c2]  h-5 rounded-full animate-bounce"
  ></div>
  <div
    className="w-5  h-5 bg-[#9869b8] rounded-full animate-bounce"
  ></div>
  <div
    className="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce"
  ></div>
</div>

      </div>
    )
  }



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
        

      {allTask.map((task) => (
          <div
            key={task._id }
            className="border border-gray-400 rounded-md p-4"
          >
            <div className="flex flex-row justify-between items-center font-semibold py-5 border-b-gray-400 border-b">
              <div>
                <span className={task.tags === "urgent" ? "text-red-400" : "text-green-500"}>{task.tags.toUpperCase()}</span>
              </div>
              <div className="flex flex-row gap-2 lg:gap-5">
                <Link to="" className="bg-purple-800 text-white py-2 px-6 rounded-md flex items-center gap-2">
                  <FiEdit />
                  <span className="hidden md:inline">Edit</span>
                </Link>
                <button  className="text-purple-800 border-purple-800 border py-2 px-6 rounded-md flex items-center gap-2">
                  <RiDeleteBinLine />
                  <span className="hidden md:inline">Delete</span>
                </button>
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-2xl font-medium lg:text-3xl pt-3 pb-3">
                {task.title}
              </h1>
              <p>{task.description}</p>
            </div>
          </div>
        ))}

    
      </div>
      <div className='py-6'>
        <p className='text-purple-800 text-center justify-center underline'>back to top</p>
        
      </div>
    </div>
  )
}

export default MyTask