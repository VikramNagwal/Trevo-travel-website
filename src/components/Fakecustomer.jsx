

const Fakecustomer = () => {
  
  return (
    <div className="capitalize border-t-2 py-4">
      <h1 className="text-2xl md:text-3xl mx-4 text-center mb-8 font-bold">What our customers say about us</h1>
      <div className=" flex flex-col md:flex-row mt-4 px-4 w-full items-center justify-between">
      <div className="px-2 flex-col flex items-center py-6">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" width={90} alt="" className="rounded-md"/>
      <p className="text-lg mb-2 font-semibold">Paula webster</p>
      <p className="">Voluptate aute aute eiusmod nostrud labore amet laborum culpa deserunt fugiat labore eiusmod velit commodo.</p>
      </div>
      <div className="px-2 py-6 flex items-center flex-col">
      <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" width={90} alt="" className="rounded-md"/>
      <h1 className="text-lg mb-2 font-semibold">steve jones</h1>
      <p>Amet exercitation ipsum sint nostrud fugiat laborum ipsum duis occaecat occaecat.</p>
      </div>
      <div className="px-2 py-6 flex items-center flex-col">
      <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" width={90} height={0} alt="" className="rounded-md"/>
      <h1 className="text-lg mb-2 font-semibold">Alison clark</h1>
      <p>Fugiat proident magna sunt velit incididunt consectetur ullamco exercitation veniam voluptate reprehenderit proident eu aliqua.</p>
      </div>
      </div>
    </div>
  )
}

export default Fakecustomer
