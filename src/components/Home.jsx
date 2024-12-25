import React from 'react';
import Svg from './asset.svg'
import Svg2 from './asset2.svg'
import { motion } from "motion/react"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
<>
<div id='home' className=' font bg-[#09090b] text-[#f4f4f5]  w-full flex flex-col  items-center gap-10 pt-10 font-title'>

<motion.div
          initial={{y:30,opacity:0}}
            whileInView={{ y:-10, opacity:  1}} 
            animate={{ y: 0, opacity: 1 }} 
            
            transition={{ duration: 1 }} 
            // 
            className='text-center lg:px-20 w-[80%]  md:font-extrabold font-bold text-4xl sm:4xl md:5xl lg:text-6xl  w-[80%]'>Transform Your Brand with Expert Marketing Strategies</motion.div>
<motion.div
          initial={{y:30,opacity:0}}
            whileInView={{ y:-10, opacity:  1}} 
            animate={{ y: 0, opacity: 1 }}
            
            transition={{ duration: 1 }} 
              className='w-[60%] text-center font-semibold text-xl text-[#e5e7eb]'>
          Experience the tarnsformative power of our expert marketign strategis as we partner with you to elevate your brand's digital presense .Let us take your brand to new heights online!
           </motion.div>
<div className=" block bg-[#09090b] lg:flex w-full gap-2 ">
<div className=" flex justify-center lg:hidden"><button className='w-[40%]   rounded-full md:px-3 lg:px-5 py-4 bg-[#4ade80] font-bold text-[#09090b] hover:scale-105 transition-all duration-300'><Link to="/appointment">Appointment</Link></button></div>
 <div className="flex justify-center items-center mt-5 lg:hidden"> <a className='w-[40%] flex justify-center' href="#service"><button className=' w-[100%]   rounded-full py-2 sm:py-4 px-5 font-bold bg-[#262626] text-[#f4f4f5] hover:scale-105 transition-all duration-300 '>Our services</button></a></div>

  <motion.div
  initial={{scale:0,opacity:0}}
  whileInView={{ scale:1, opacity:  1}}
  animate={{ y: 0, opacity: 1 }}
  
  transition={{ duration: 0.65 }}
  
  className="mt-5 lg:w-[20%] lg:pl-10 flex justify-center"><img src={Svg}></img></motion.div>
  <div className=" hidden lg:lg:w-[30%] lg:lg:flex lg:lg:justify-end lg:lg:items-center"><button className='w-[40%]   rounded-full md:px-3 lg:px-5 py-4 bg-[#4ade80] font-bold text-[#09090b] hover:scale-105 transition-all duration-300'><Link to="/appointment">Appointment</Link></button></div>
  <div className="hidden lg:lg:w-[30%] lg:lg:flex lg:lg:justify-start lg:lg:items-center lg:lg:ml-2" ><a className='w-[40%] flex justify-center' href="#service"><button className=' w-[100%]   rounded-full py-4 px-5 font-bold bg-[#262626] text-[#f4f4f5] hover:scale-105 transition-all duration-300 '>Our services</button></a></div>


<motion.div
initial={{scale:0,opacity:0}}
whileInView={{ scale:1, opacity:  1}}
animate={{ y: 0, opacity: 1 }} 

transition={{ duration: 0.65 }}

className="hidden  lg:block lg:w-[20%] lg:pr-10"><img src={Svg2}></img></motion.div>
</div>
</div>


</>
  )
}

export default Home