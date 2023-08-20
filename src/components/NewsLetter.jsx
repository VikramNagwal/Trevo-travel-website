

const NewsLetter = () => {
  return (
    <div className="bg-black w-full h-[30%] flex justify-center items-center">
    <div className="bg-black w-full mx-auto rounded-sm text-center my-4">
   <h1 className="text-white text-2xl md:text-4xl capitalize my-4 font-semibold">Subscribe to our newsletter to get latest offers,<span>discounts%</span></h1>
   <input type="email" placeholder="Email" className="w-[300px] mx-4 outline-none"/>
   <button className="rounded-md bg-[#0EB1D2] duration-150 my-2 ease-in" type="submit">Subscribe Now</button>
    </div> 
    </div>
  )
}

export default NewsLetter