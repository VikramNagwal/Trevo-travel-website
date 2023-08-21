import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className=" bg-gradient-to-r from-[#090979] to-[#00d4ff] h-screen w-full flex justify-center items-center">
    <div className="flex z-10 w-[80%] md:w-[50%] h-[60%] md:mx-auto mt-11 mx-2 rounded-md overflow-hidden">
    <div className="bg-white w-[70%] hidden md:block">
    <img title="Greece" src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="greece" className="object-cover w-full h-full" />
    </div>
    <div className="bg-white w-full h-full">
    <form className="flex flex-col mx-8 my-4">
    <Link to="/" className="text-center cursor-pointer text-3xl font-bold mb-1">Trevo</Link>
    <label >First Name</label>
    <input type="text" required />
    <label>Last Name</label>
    <input type="text" required />
    <label>Email</label>
    <input type="email" required />
    <label>Password</label>
    <input type="password" required />
    <label>Confirm Password</label>
<input type="password" required />
<button className="bg-[#2B4141] mt-6 rounded-md border-black  ">Register</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Login