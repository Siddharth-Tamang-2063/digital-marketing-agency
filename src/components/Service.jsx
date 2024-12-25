import React from 'react';
import Box from './boxes/Boxes'; 
import { AiOutlineStock } from 'react-icons/ai';
import { FaSearchengin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { FaSearch } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaAd } from "react-icons/fa";
const Service = () => {
  const value = [
    {
      src: <AiOutlineStock size={50} />,
      number: '01',
      text1: "Sales",
      text2: "Experts in sales strategy, we deliver unmatched results by converting potential leads into long-term loyal customers"
    },
    {
      src: <FaSearch size={50}/>,
      number: '02',
      text1: "SEO/SEM",
      text2: "Specializing in SEO and SEM, we maximize visibility, drive organic traffic, and optimize ad campaigns for measurable growth."
    }
  ];
  
  const value2 = [
    {
      src: <CgWebsite size={50}/>,
      number: '03',
      text1: "Website Design",
      text2: "Crafting stunning, user-friendly website designs that captivate audiences, enhance engagement, and drive seamless digital experiences for your brand"
    },
    {
      src: <FaAd size={50}/>,
      number: '04',
      text1: "Advertising",
      text2:"Maximize your's brand's visibility with targeted advertising campaigns. We create  strategies that boost engagement,  deliver measurable results across all platforms."
    }
  ];

  return (
    <div id="service" className="font bg-black w-full text-white md:flex">
      <div className="h-full w-full md:w-[40%] lg:w-[50%] bg-black px-4">
        <h2 className="font-bold text-3xl pt-4">Services</h2>
        <h3 className="font-bold text-2xl mt-5">We offer the best services to our clients</h3>
        <p className="font-semibold text-xl mt-5 text-[#e5e7eb]">
          Empower your business with our expert digital marketing solutions. From SEO to social media, content creation, and analytics, we deliver measurable results and drive meaningful growth.
        </p>
        <div className="py-4 flex justify-center">
          <Link to="/service">
            <motion.div 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 rounded-full py-4 px-4 text-sm flex items-center"
            >
              Browse All Services
              <div className="px-2 text-lg sm:text-2xl">
                <FaSearchengin />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="h-full md:w-[60%] lg:w-[50%]">
        <div className="flex flex-col sm:flex-row items-center">
          {value.map((item, i) => (
            <Box key={i} items={item} icon={item.src} />
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center ">
          {value2.map((item, i) => (
            <Box key={i} items={item} icon={item.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
