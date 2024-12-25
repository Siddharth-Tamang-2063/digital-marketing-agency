import React from 'react'
import Box from './boxes/Boxes'; 
import { AiOutlineStock } from 'react-icons/ai';
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { SiAdobe } from "react-icons/si";
import { GrCopy } from "react-icons/gr";
import { BiBookContent } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";
const Servicesfull = () => {
    const value = [
        {
          src:<FaMeta size={50} />,
          number: '05',
          text1: "Meta ads ",
          text2: "Leverage Meta Ads to reach your audience across Facebook, Instagram, and Messenger. We craft targeted campaigns that drive engagement, conversions, and measurable business growth."
        },
        {
          src:<FaGoogle size={50} />,
          number: '06',
          text1: "Google ads",
          text2: "Utilize Google Ads to reach potential customers through targeted search, display, and video ads. Maximize visibility, increase traffic, and drive conversions for business growth. Start your advertising today"
        }
        ,
        {
          src:<AiFillLike size={50} />,
          number: '07',
          text1: "Social Media Management",
          text2: "Enhance your brand’s online presence with expert social media management. We create engaging content, grow your audience, and boost brand awareness across multiple platforms."
        }
        ,
        {
          src:<SiAdobe size={40}/>,
          number: '08',
          text1: "Graphic desigining",
          text2: "Transform your brand with creative graphic designing. We craft visually appealing designs that capture attention, enhance brand identity, and communicate your message effectively.Start today"
        }
        
      ];
      const value2 = [
        {
          src:<GrCopy size={50}/>,
          number: '09',
          text1: "Copywriting ",
          text2: "Craft compelling content with expert copywriting. We create persuasive, engaging copy that resonates with your audience and drives action, boosting brand visibility and conversions."







        },
        {
          src:<BiBookContent size={50} />,
          number: '02',
          text1: "Content Creation",
          text2: "Create engaging and high-quality content that connects with your audience. We specialize in crafting captivating articles, videos, and visuals to boost brand awareness and engagement."
        }
        ,
        {
          src:<FaVideo  size={50} />,
          number: '02',
          text1: "Video editing",
          text2: "Enhance your content with professional video editing. We create polished, captivating videos that tell your story, engage your audience, and elevate your brand’s presence.Start today"
        }
        ,
        {
          src:<BsFillCameraReelsFill size={50} />,
          number: '02',
          text1: "Reels",
          text2: "Create captivating Reels that engage and entertain. We craft short, impactful videos designed to boost your brand’s reach and connect with your audience on social media."
        }
        
      ];
  return (
    <>
<div className='h-screen w-full bg-black py-10 '>
    <div className='flex flex-col md:flex-row items-center bg-black text-white font '>{value.map((item, i) => (
             
             <Box key={i} items={item} icon={item.src}/>
            ))}</div>
            <div className='flex flex-col md:flex-row items-center bg-black text-white font '>{value2.map((item, i) => (
             
             <Box key={i} items={item} icon={item.src}/>
            ))}</div>
            </div>
    </>
  )
}

export default Servicesfull