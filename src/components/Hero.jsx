import {Link} from 'react-router-dom'

const Hero = () => {

  return (
    <div className="w-full h-auto object-cover text-white">
    
    <img src="https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="travel" className="w-full h-screen object-cover"/>

    
    <div className="flex flex-col w-full h-full justify-center items-center absolute top-0 left-0">
    <div className="mx-2 py-7 px-4">
    <p className="text-2xl cursor-default drop-shadow-lg">Explore the world</p>
    <h1 className="text-5xl cursor-default font-bold">with trevo</h1>

    <p className="md:text-xl md:py-7 mt-2 cursor-default ">lorem ipsum ghanta Laboris elit excepteur quis adipisicing occaecat est labore sint exercitation Lorem aliquip nostrud elit.</p>

    <button className="bg-[#0EB1D2] border-none my-4 py-2 font-semibold shadow-lg"><Link to="/login">Reserve Now</Link></button>
    </div>
    </div>
    </div>
  )
}

export default Hero