import React from 'react'
import Svg from './nitesh.jpg'
import Svg2 from './me2.jpg'
import { motion } from "motion/react"
import Svg3 from './cofounder2.jpg'
const Animation = () => {
  return (
    <>
    <div id="member"className="pt-5 text-3xl md:text-6xl font-bold flex justify-center bg-black text-white font">OUR TEAM MEMBERS</div>
    <div className='w-full bg-black px-8'>
<div className=' flex flex-col sm:flex-row justify-center items-center font2  '>
    <motion.div 
    initial={{scale:0,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    animate={{}}
    transition={{duration:0.5}}
    
    
    className='w-[80%] md:w-[30%] m-2 '>
        <div>
        <img className='rounded-md flex justify-center' src={Svg3}></img>
        </div>
        <div className='text-white text-2xl font-bold py-2 flex justify-center font'>Himanshu Jha</div>
        <div className='text-white text-2xl font-bold  flex justify-center font'>Co-founder</div>
    </motion.div>
    <motion.div 
    initial={{scale:0,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    animate={{}}
    transition={{duration:0.5}}
    
    
    className='w-[80%] md:w-[30%] m-2 '>
        <div className='' >
        <img  className='rounded-md flex justify-center ' src={Svg}></img>
        </div>
        <div className='text-white text-2xl font-bold py-2 flex justify-center font'>Nitesh Swarnakar</div>
        <div className='text-white text-2xl font-bold  flex justify-center font'>CEO/Founder </div>
    </motion.div>
    <motion.div 
    initial={{scale:0,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    animate={{}}
    transition={{duration:0.5}}
    
    
    className='w-[80%] md:w-[30%] m-2 '>
        <div className='' >
        <img  className='rounded-md flex justify-center ' src={Svg2}></img>
        </div>
        <div className='text-white text-2xl font-bold py-2 flex justify-center font'>Siddharth Tamang</div>
        <div className='text-white text-2xl font-bold  flex justify-center font'>Developer </div>
    </motion.div>
</div>

    </div>
  </>
  )
}

export default Animation