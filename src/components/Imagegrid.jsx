

const Imagegrid = () => {


  return (
    <div className='w-full mx-auto my-8 capitalize'>
    <h1 className="text-center bg-[#2B4141] py-4 text-white text-2xl md:text-4xl font-bold mb-8">explore most popular places</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-2'>
      <img src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className='max-w-full h-auto rounded-md md:hover:scale-95 duration-300 cursor-pointer'/>
      <img src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className='max-w-full h-auto rounded-md md:hover:scale-95 duration-300 cursor-pointer'/>
      <img src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className='max-w-full h-auto rounded-md md:hover:scale-95 duration-300 cursor-pointer'/>
      <img src="https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className='max-w-full h-auto rounded-md md:hover:scale-95 duration-300 cursor-pointer hidden md:grid'/>
      <img src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" className='max-w-full h-auto rounded-md md:hover:scale-95 duration-300 cursor-pointer hidden md:grid'/>
      <img src="https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className='max-w-full h-auto rounded-md md:hover:scale-95 duration-300 cursor-pointer hidden md:grid'/>
      </div>
      </div>
  )
}

export default Imagegrid
