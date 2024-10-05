import { Link } from 'react-router-dom'
import mainimg from '../../assets/images/Component 1.svg'
// import slidetwo from '../../assets/images/Property 1=Frame 2.svg'
// import slidethree from '../../assets/images/Property 1=Frame 3.svg'
const Home = () => {
  return (
    <div className='w-[80%] container mx-auto'>
        <div className='grid grid-cols-1 items-center  lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-16  py-10 lg:py-14'>
           <div  className='space-y-8'>
            <h1 className='text-3xl lg:text-5xl text-center lg:text-start'>Manage your Task on  <span className='text-purple-800'>TaskDuty</span></h1>
            <p className='text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum recusandae maiores. Veniam illo ratione voluptas, nemo adipisci quidem accusamus obcaecati voluptate laboriosam inventore eligendi! Accusamus quidem earum iure corrupti?</p>
            <div className='flex justify-center lg:justify-start'>
            <Link to="/mytask" className='w-40  font-bold text-white bg-[#9553d6] rounded-md p-3'>Go to My Tasks</Link>
            </div>
           </div>
           <div className=''>
            <img className='w-full' src={mainimg} alt="" />
            {/* <img className='w-full' src={slidetwo} alt="" />
            <img className='w-full' src={slide} alt="" /> */}
           </div>
        </div>
    </div>
  )
}

export default Home 
