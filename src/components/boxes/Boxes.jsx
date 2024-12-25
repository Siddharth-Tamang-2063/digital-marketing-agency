import React from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { FaChartLine } from "react-icons/fa6";

const Boxes = (prop) => {
  console.log()

  return (
    <>
      <div className='border-2 border-solid border-white h-[45%]  w-[60%] md:w-[45%] md:h-[100%]  m-5 rounded-lg'>
        <div className=" font text-2xl flex justify-between items-center px-5 py-2">
        
          <div className=' h-[10%] bg-blue-600 inline-block rounded-full p-2 mt-1'>
         {prop.items.src}
          </div>
          <div className='h-[20%]'>{prop.items.number}</div> 
        </div>
        <div className='text-xl font-bold px-2 py-2 font h-[20%] text-[#f8fafc]'>
           {prop.items.text1}
        </div>
        <div className='text-xl font-bold px-2 py-2 font h-[50%] text-[#e5e7eb]'>
        {prop.items.text2}
        </div>
      </div>
    </>
  );
};

export default Boxes;     