import {FiMenu} from 'react-icons/fi'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false)


  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2B4141] py-6 z-30 text-white">
    <div className='flex justify-between items-center mx-auto px-4 max-w-[1280px]'>
    <Link to="/" className=" font-semibold text-2xl lg:text-4xl md:text-3xl z-30">Trevo</Link>
    <ul className='lg:flex items-center hidden uppercase text-lg'>
    <Link to='/' className='mx-4 hover:scale-95 duration-300'>Home</Link>
    <Link to='/about'className='mx-4 hover:scale-95 duration-300'>about</Link>
    <Link to='/login' className='mx-4 hover:scale-95 duration-300'>Login</Link>
    </ul>
    <FiMenu size={30} onClick={() => setNav(!nav)} className='lg:hidden'/>
    <div className={nav?'w-[60%] z-10 h-screen  flex-col bg-black/90 fixed top-0 left-0 flex justify-center items-center duration-300 ease-in-out': 'absolute top-0 h-screen left-[-100%] flex justify-center items-center ease-in-out duration-300'}>
    <ul className='flex flex-col justify-between h-[30%] items-center capitalize text-2xl w-[80%]'>
     <Link to='/' className='my-2 bg-white text-black text-center rounded-md py-2 w-full'>Home</Link>
 <Link to='/about'className='my-2 bg-white text-black text-center rounded-md py-2 w-full'>about</Link>
<Link to='/login' className='my-2 bg-white text-black text-center rounded-md py-2 w-full'>Login</Link>
    </ul>
    </div>
    </div>
    </nav>
  )
}

export default Navbar