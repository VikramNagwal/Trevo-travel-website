import {MdOutlineLocationOn} from 'react-icons/md'
import {BsPerson} from 'react-icons/bs'
import {PiMountains} from 'react-icons/pi'


const Services = () => {


  return (
    <div className='w-full h-full my-6 capitalize py-6 border-t-2'>
    <h1 className='text-center text-5xl font-bold'>Our services</h1>
    <p className='text-md text-center pb-4 mt-4 mb-8'>Always been industry level</p>
      <div className='flex flex-col md:flex-row items-center justify-between text-center mx-6 capitalize'>
      <div className='px-2 cursor-pointer'>
      <MdOutlineLocationOn size={40} color='#0EB1D2' className='mx-auto'/>
      <p className='text-lg font-bold '>location manager</p>
      <p className='font-semibold'>we want you to be rome without worries thats why we give a personal manger to you</p>
      </div>
      <div className='px-2 cursor-pointer'>
      <BsPerson size={40} color='#0EB1D2' className='mx-auto'/>
      <p  className='text-lg font-bold'>private guide</p>
      <p className='font-semibold'>we want you to be rome without worries thats why we give a personal manger to you</p>
      </div>
      <div className='px-2 cursor-pointer'>
      <PiMountains size={40} color='#0EB1D2' className='mx-auto'/>
      <p  className='text-lg font-bold'>Travel management</p>
      <p className='font-semibold'>we want you to be rome without worries thats why we give a personal manger to you</p>
      </div>
      </div>
    </div>
  )
}

export default Services
