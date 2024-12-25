import React from "react";
import Svg from "./asset.svg";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion"; 
import Svg3 from './buzz2.jpg'
const About = () => {
  const ref = React.useRef(null); 
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div id="about" className="about w-[100%] bg-black text-white ">
        
        <div className="ml-8 md:ml-16 font-extrabold text-4xl sm:text-5xl py-5 font">Who are we</div>
        
        <div className="block md:flex">
          <div className=" text-[#e5e7eb] font px-5 lg:ml-11 md:text-md inline-block lg:text-2xl font-bold w-[100%] md:w-[60%] py-5">
            We are Buzzcraftmedia, we dominate the digital marketing landscape.
            With unmatched expertise in SEO, paid advertising, and social media
            strategies, we help businesses achieve unparalleled growth and
            success online. Our data-driven, innovative approach ensures your
            brand stays ahead of the competition, driving traffic, conversions,
            and ROI like no other. When it comes to digital marketing, we are
            the leaders, and we make your success our priority.
          </div>
          <div className="flex justify-center items:center md:p-0 p-5">
            <img className="h-[50%] rounded-lg" src={Svg3} alt="About us" />
          </div>
        </div>
        {/* Stats Section */}
        <div className="block sm:flex gap-5 bg-black py-5 md:ml-10 lg:ml-11">
          <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.65 }}
            className="ml-4 py-2 text-center"
          >
            {isInView && (
              <div className="text-xl font-bold">
                <CountUp start={0} end={169} duration={5} />
              </div>
            )}
            <div className="text-xl font-bold font">Satisfied Clients</div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.65 }}
            className="ml-4 py-2 text-center"
          >
            {isInView && (
              <div className="text-xl font-bold">
                <CountUp start={0} end={13} duration={5} />
              </div>
            )}
            <div className="text-xl font-bold font">Brand Collaboration</div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.65 }}
            className="ml-4 py-2 text-center"
          >
            {isInView && (
              <div className="text-xl font-bold">
                <CountUp start={0} end={20} duration={5} />
              </div>
            )}
            <div className="text-xl font-bold font">Awards Won</div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
