import React from 'react'

const navbar = () => {
  return (
    <>
    <div className='font md:hidden block border-t-2 border-b-2 border-solid border-white z-10 absolute w-full bg-black flex flex-col justify-center items-center'>
        <a href="" className='flex justify-center'><div className='hover:bg-[#0f172a] rounded-lg text-2xl font-bold text-white w-[20%] flex justify-center py-2 font'>Home</div></a>
        <a href="#about" className='flex justify-center'><div className='hover:bg-[#0f172a] rounded-lg text-2xl font-bold text-white w-[20%] flex justify-center py-2 font'>About</div></a>
        <a href="#service" className='flex justify-center'><div className='hover:bg-[#0f172a] rounded-lg text-2xl font-bold text-white w-[35%] flex justify-center py-2 font'>Services</div></a>
        <a href="#member" className='flex justify-center'><div className='hover:bg-[#0f172a] rounded-lg text-2xl font-bold text-white w-[30%] flex justify-center py-2 font'>Members</div></a>
        <a href="#contact" className='flex justify-center'><div className='hover:bg-[#0f172a] rounded-lg text-2xl font-bold text-white w-[25%] flex justify-center py-2 font'>Contact</div></a>



    </div>
    </>
  )
}

export default navbar