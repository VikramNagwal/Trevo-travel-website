import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className=" bg-gradient-to-r from-[#090979] to-[#00d4ff] h-screen w-full flex justify-center items-center">
    <div className="flex z-10 w-[900px] h-[450px] md:mx-auto mt-11 mx-2">
    <div className="bg-white w-[70%]">
    <img title="Greece-Sentorini" src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="greece" className="object-cover w-full h-full hover:scale-95 ease-in-out duration-300 hover:rounded-lg max-sm:scale-none" />
    </div>
    <div className="bg-white w-full h-full">
    <form className="flex flex-col mx-8 my-4">
    <Link to="/" className="text-center cursor-pointer text-4xl font-bold mb-2">Trevo</Link>
    <label >First Name</label>
    <input type="text" required />
    <label >Last Name</label>
    <input type="text" required />
    <label >Email</label>
    <input type="email" required />
    <label >Password</label>
    <input type="password" required />
    <label >Confirm Password</label>
<input type="password" required />
<button className="bg-[#2B4141] mt-6 rounded-md border-black  ">Register</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Login