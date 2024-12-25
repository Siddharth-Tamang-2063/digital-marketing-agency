import React, { useState } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      budget: "",
      description: "",
    });
  };

  return (
    <>
      <div id="contact" className="bg-black w-full text-white md:flex py-28 flex md:flex-row flex-col items-center">
        <div className="w-[80%] md:w-[50%] flex flex-col px-10">
          <div className="text-5xl font-bold">LET'S TALK</div>
          <div className="py-3">
            FILL IN THE FORM TO CONTACT OR SEND A EMAIL TO
            buzzcraftmedia.business@gmail.com
          </div>
          <div className="flex text-2xl flex items-center">
            <div className="px-5 py-2 text-[#cbd5e1] hover:text-[white]">
              <a href="https://www.instagram.com/buzzcraftmediaofficial?igsh=OWR0cXJwdmNzaDE1">
              <FaSquareInstagram /> </a>
            </div>
            <div className="px-5 py-2 text-[#cbd5e1] hover:text-[white]">
              <a href="https://www.facebook.com/profile.php?id=61565432281780">
              <FaFacebook /></a>
            </div>
            <div className="px-5 py-2 text-[#cbd5e1] hover:text-[white]">
              <a href="https://wa.me/qr/FVVYEQRBHSPLB1">
              <FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="w-[80%] md:w-[50%]">
          <form onSubmit={handleSubmit}>
            <div className="w-[90%] my-2">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-10 border-b-2 border-solid border-blue-500 text-lg text-white bg-black px-3 focus:outline-none"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="w-[90%] my-2">
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-10 border-b-2 border-solid border-blue-500 text-lg text-white bg-black px-3 focus:outline-none"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="w-[90%] my-2">
              <input
                required
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full h-10 border-b-2 border-solid border-blue-500 text-lg text-white bg-black px-3 focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                type="number"
                placeholder="Your Budget"
              />
            </div>
            <div className="w-[90%] my-2">
              <input
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full h-20 border-b-2 border-solid border-blue-500 text-lg text-white bg-black px-3 focus:outline-none"
                type="text"
                placeholder="Your Description"
              />
            </div>
            <div className="w-[90%]">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full h-10 bg-blue-400 rounded-lg flex justify-center items-center"
              >
                <input
                  className="w-full h-[100%] bg-blue-600 rounded-lg"
                  type="submit"
                  value="Send"
                />
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
