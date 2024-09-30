import React from 'react'
import mainimg from '../../assets/images/Component 1.svg'
const Home = () => {
  return (
    <div className='w-[80%] py-10 container mx-auto'>
        <div className='grid grid-cols-2 justify-items-end py-20'>
           <div  className='space-y-6'>
            <h1 className='text-5xl '>Manage your Task on  <span className='text-purple-800'>TaskDuty</span></h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum recusandae maiores. Veniam illo ratione voluptas, nemo adipisci quidem accusamus obcaecati voluptate laboriosam inventore eligendi! Accusamus quidem earum iure corrupti?</p>
            <button className='w-40 font-bold text-white bg-[#9553d6] rounded-md p-3'>Go to My Tasks</button>
           </div>
           <div className=''>
            <img className='h-[80%]' src={mainimg} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Home