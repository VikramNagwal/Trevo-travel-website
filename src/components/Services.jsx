import {MdOutlineLocationOn} from 'react-icons/md'
import {BsPerson} from 'react-icons/bs'
import {PiMountains} from 'react-icons/pi'


const Services = () => {


  return (
    <div className='w-full h-full my-6 capitalize py-6 border-t-2'>
    <h1 className='text-center text-3xl md:text-5xl font-bold'>Our services</h1>
    <p className='text-md text-center pb-4 mt-4 mb-8'>Always been industry level</p>
      <div className='flex flex-col md:flex-row items-center justify-between text-center mx-6 capitalize'>
      <div className='px-2 cursor-pointer py-2'>
      <MdOutlineLocationOn size={40} color='#0EB1D2' className='mx-auto'/>
      <p className='text-lg font-semibold mb-2 '>location manager</p>
      <p className='text-start'>we want you to be rome without worries thats why we give a personal manger to you</p>
      </div>
      <div className='px-2 cursor-pointer py-2'>
      <BsPerson size={40} color='#0EB1D2' className='mx-auto'/>
      <p className='text-lg mb-2 font-semibold'>private guide</p>
      <p className='text-start'>we want you to be rome without worries thats why we give a personal manger to you</p>
      </div>
      <div className='px-2 cursor-pointer py-2'>
      <PiMountains size={40} color='#0EB1D2' className='mx-auto'/>
      <p  className='text-lg mb-2 font-semibold'>Travel management</p>
      <p className='text-start'>we want you to be rome without worries thats why we give a personal manger to you</p>
      </div>
      </div>
    </div>
  )
}

export default Services
