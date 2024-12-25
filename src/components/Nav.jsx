import React, { useState } from 'react'

import { FaBars } from "react-icons/fa";
import Navbar from './Navbar'

import { HiMiniBars4 } from "react-icons/hi2";
import Marquee from 'react-fast-marquee';

const Nav = () => {
    const [value, setvalue] = useState(false)
    const [bar, setbar] = useState(true)
  return (

    <>
    <div className=' h-32 bg-[#09090b] flex items-center w-full text-[#f4f4f5] font'>
    <div  className=' font-bold md:text-md text-xl text-white md:w-[15%] w-[25%] lg:w-[30%] ml-8 md:ml-16 md:mr-5'>BuzzcraftMedia</div>
        <a href=""><div className='hidden md:block transition-all duration-300 font-semibold  py-1  text-lg   text-white ml-10 border-b-2 border-solid  border-black hover:border-white hover:pb-2'>Home</div></a>
        <a href="#about"><div className='hidden md:block transition-all duration-300 font-semibold py-1 text-lg   text-white ml-8 border-b-2 border-solid border-black hover:border-white hover:pb-2'>About</div></a>
        <a href="#service"><div className='hidden md:block transition-all duration-300 font-semibold  py-1 text-lg   text-white ml-8 border-b-2 border-solid border-black hover:border-white hover:pb-2'> Services</div></a>
        <a href="#member"><div className='hidden md:block transition-all duration-300 font-semibold py-1 text-lg   text-white ml-8 border-b-2 border-solid border-black hover:border-white hover:pb-2'>Members</div></a>
        
        <a href="#contact"><div className='hidden md:block w-28 end-5 px-3 flex justify-center  items-center font-semibold  py-1 text-xl text-white  rounded-lg ml-16 border-2 border-solid  border-white mr-5'><Marquee><div className='ml-2'>Contact</div></Marquee></div></a>
        <div onClick={()=>{setvalue(!value);setbar(!bar) }} className={bar?"block transition-all duration-300 md:hidden absolute end-5 text-white text-3xl":"transition-all duration-300 rotate-90 block md:hidden absolute end-5 text-white text-3xl"} ><HiMiniBars4 /></div>

    </div>
    {
    value?<Navbar />:null
}
    </>
  )
}

export default Nav