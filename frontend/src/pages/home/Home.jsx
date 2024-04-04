import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="text-white h-screen w-full bg-[#0F0F0F] flex flex-col  ">
        <div className="flex justify-center -mb-10 lg:mt-[5%] mt-[20%] cursor-pointer w-full select-none " >
          <img className="absolute  " src="/public/logo green (1).png" alt="" />
          <img className="relative hover:opacity-0 " src="/public/logo white.png" alt="img" />
      </div>
    <div className="lg:text-3xl text-lg font-[Gilroy] -mt-20 px-5 lg:px-0 text-center">Experience real-time connections with Overseas. Connect instantly, <br />chat freely, and make every moment count.</div>

       <Link to={'/Login'}> 
      <div className="w-full flex justify-center mt-7"> <button type="button" className="font-[Gilroy] font-semibold py-2.5 px-5 me-2 mb-2 text-xl  text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#007655] focus:z-10 focus:ring-4 focus:ring-gray-100 0">Become a member </button>
</div>
      </Link>
  </div>
  )
}

export default Home