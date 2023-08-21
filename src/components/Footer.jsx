import {Link} from 'react-router-dom'

const Footer = () => {


  return (
    <div className="w-full bg-[#2B4141] text-white z-20 py-4">
      <div className="max-w-[1280px] px-4 border-b-2 border-gray-200 items-center md:items-start mx-auto py-4 flex justify-between">
      <div className="w-[30%]">
      <h1 className="text-2xl md:text-3xl font-bold">Trevo</h1>
      <p className="text-lg text-gray-50 my-2 font-semibold hidden md:block">Ullamco anim amet deserunt tempor in minim amet cupidatat laboris Lorem ea id ullamco id.</p>
      </div>
      <ul className="capitalize hidden mx-2 md:block">
      <Link to="/about">about us</Link>
      <li>our story</li>
      <li>gallerying with us</li>
      <li>travel blogs & tips</li>
      <li>tour guide </li>
      <li>be our partner</li>
      </ul>
      <ul className="capitalize mx-2 hidden md:block">
<li>support</li>
<li>privacy policy</li>
<li>term & condition</li>
<li>forms</li>
<li>tour guide</li>
</ul>
<ul className="capitalize mx-2">
<h1>contact</h1>
<li>phone no : 2541684522</li>
<li>email : <span className="lowercase font-semibold underline">travoexplore@gmail.com</span></li>
<li>location : your address,xyz</li>
</ul>
      </div>
      <p className="text-center pt-2">Ut pariatur dolore anim cupidatat.</p>
    </div>
  )
}

export default Footer
